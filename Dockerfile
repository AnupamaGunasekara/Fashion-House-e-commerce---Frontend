FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV VITE_STRIPE_PK="pk_test_51QMClYLLaYxMxzFJgmuOMoq79IrqMVQpSPyYsyflrFnoFR3SOVV19jvJAahsWGNffPQwOlrDrCmooaUq9tpnfHIE00g4Veeb1x"

RUN npm run build

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]