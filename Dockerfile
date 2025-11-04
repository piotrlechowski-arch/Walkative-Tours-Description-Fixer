# -----------------------------------------------------------------------------
# Build stage: install all dependencies and build the React frontend
# -----------------------------------------------------------------------------
FROM node:20 AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build the frontend
COPY . .
RUN npm run build

# -----------------------------------------------------------------------------
# Runtime stage: slim Node.js image with only production dependencies
# -----------------------------------------------------------------------------
FROM node:20-slim
WORKDIR /app

ENV NODE_ENV=production

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy backend source and built frontend from the builder stage
COPY server.js googleApiService.js ./
COPY --from=build /app/dist ./dist

# Expose default port (Cloud Run respects PORT env variable)
EXPOSE 8080

CMD ["node", "server.js"]
