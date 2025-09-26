FROM node:24-slim

WORKDIR /app

COPY . /app/

RUN corepack enable \
    && pnpm i

CMD ["pnpm", "build"]