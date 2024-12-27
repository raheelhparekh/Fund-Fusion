# Use the official Node.js image
FROM node:23-alpine3.20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the Vite app runs on
EXPOSE 5173

# Start the development server
CMD ["sh", "-c", "npm install && npm run dev"]