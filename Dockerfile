# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production deps
RUN npm install --production

# Expose port for Next.js server
EXPOSE 3000

# Run Next.js in production
CMD ["npx", "next", "start", "-p", "3000"]
