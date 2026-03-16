FROM node:20-alpine AS builder
WORKDIR /app

# Enable corepack for pnpm (standard best practice without global npm install of pnpm)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# Final Runner Stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
# Ensure next.js output doesn't rely on telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Copy strictly necessary files from builder
COPY --from=builder /app/public ./public
# Next.js standalone output contains a server.js and node_modules specific to the build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose port (internal docker network use)
EXPOSE 3000

# Start standalone Node server
CMD ["node", "server.js"]
