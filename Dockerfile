FROM oven/bun:canary-alpine
WORKDIR /app/landgallery
COPY . .
RUN bun install
EXPOSE 3000
CMD ["bun", "run", "dev"]