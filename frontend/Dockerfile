FROM node:24-alpine

RUN npm install --global pnpm@10
WORKDIR /workspace

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/package.json
RUN pnpm install --frozen-lockfile

COPY frontend/ ./frontend/
EXPOSE 5173
CMD ["pnpm", "--dir", "frontend", "dev", "--host", "0.0.0.0"]
