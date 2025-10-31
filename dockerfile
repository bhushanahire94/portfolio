# ---------- Stage 1: Build with Node ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies first for efficient caching
COPY package*.json ./
RUN npm ci

# Copy rest of the source code and build
COPY . .
RUN npm run build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:stable-alpine

# Clean default html folder
RUN rm -rf /usr/share/nginx/html/*

# Copy built output directly (not inside /portfolio)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
