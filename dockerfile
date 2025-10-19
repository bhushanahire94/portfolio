# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json bun.lockb* ./ 

# Install dependencies (you can switch between npm/yarn/bun)
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the project for production
RUN npm run build

# Debug step: List the contents of /app to see the build output folder
RUN ls -l /app

# ---------- Stage 2: Serve ----------
FROM nginx:stable-alpine

# Remove default nginx static assets and copy your built app
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
# Change the directory name here based on the output folder name: `build` or `dist`
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy optional custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
