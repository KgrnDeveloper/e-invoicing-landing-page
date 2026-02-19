# Stage: Development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose port for Next.js dev server
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm", "run", "dev"]
