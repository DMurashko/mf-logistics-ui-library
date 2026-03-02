# Build stage
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build module federation dist files
RUN pnpm run build

# Build storybook static files
RUN pnpm run build-storybook

# Production stage
FROM nginx:alpine

# Copy storybook built assets to root
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# Copy module federation dist to a subdirectory
COPY --from=builder /app/dist /usr/share/nginx/html/dist

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script (though UI library might not have env vars for module federation, good for consistency)
COPY entrypoint.sh /docker-entrypoint.d/99-env-replace.sh
RUN chmod +x /docker-entrypoint.d/99-env-replace.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
