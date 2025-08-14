# ---------- Etapa de dependencias y build ----------
FROM node:22.18.0 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ---------- Etapa de producción ----------
FROM node:22.18.0 AS production

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --only=production

# Copiamos los artefactos compilados desde el builder
COPY --from=builder /app/dist ./dist

EXPOSE 8090
CMD ["node", "dist/server.js"]
