FROM node:23-alpine3.20 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

RUN npx prisma generate

# Stage 2: Runtime
FROM node:23-alpine3.20

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["sh", "-c", "npx prisma db push && npm run dev"]
