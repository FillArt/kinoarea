# Используем официальный образ node
FROM node:20-alpine

# Устанавливаем pnpm глобально
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# Указываем рабочую директорию
WORKDIR /app

# Копируем package.json и lock-файл
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install

# Копируем остальную часть проекта
COPY . .

# Открываем порт Vite (по умолчанию 5173)
EXPOSE 5173

# Запускаем dev-сервер
CMD ["pnpm", "dev"]