# -----------------------------------------------------------------------------
# Build stage: install all dependencies and build the React frontend
# -----------------------------------------------------------------------------
FROM node:20 AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build the frontend
# Force rebuild by adding a build argument that changes with each build
# This MUST be before COPY to invalidate the cache for that layer
# Build ID: 20251105_112616
ARG CACHEBUST
COPY . .
# Clear Vite cache to ensure fresh build
RUN rm -rf node_modules/.vite dist
RUN echo "Cache bust: $CACHEBUST" && npm run build

# -----------------------------------------------------------------------------
# Runtime stage: Use Ubuntu 24.04 for newer libheif (1.17.6) which supports modern HEIC
# -----------------------------------------------------------------------------
FROM ubuntu:24.04
WORKDIR /app

ENV NODE_ENV=production
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js 20 from NodeSource and system dependencies for Sharp
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update && apt-get install -y \
    nodejs \
    python3 \
    build-essential \
    pkg-config \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Rebuild Sharp with libvips support
# Using Sharp 0.32.6 which we can reliably build from source
# NOTE: For HEIC files, we use TWO-STAGE CONVERSION:
#   1. heic-convert npm library (WebAssembly-based) converts HEIC -> JPEG
#   2. Sharp converts JPEG -> WebP
# This approach doesn't require system libheif and is more reliable for modern iPhone HEIC files
RUN npm uninstall sharp \
    && npm install --no-save sharp@0.32.6 \
    && cd node_modules/sharp \
    && rm -rf build vendor \
    && npx node-gyp rebuild --verbose \
    && cd ../.. \
    && echo "Sharp 0.32.6 rebuilt from source. HEIC conversion uses heic-convert (WebAssembly) + Sharp pipeline."

# Copy backend source and built frontend from the builder stage
COPY server.js googleApiService.js ./
COPY --from=build /app/dist ./dist

# Expose default port (Cloud Run respects PORT env variable)
EXPOSE 8080

CMD ["node", "server.js"]
