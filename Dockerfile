# Simple production-ready image for Next.js portfolio
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies (only package files copied first for better caching)
COPY package*.json ./
RUN npm install --production=false

# Copy source and build
COPY . .
RUN npm run build

# Runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=4000

# Copy only the built output and required files
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

EXPOSE 4000

CMD ["npm", "run", "start"]
