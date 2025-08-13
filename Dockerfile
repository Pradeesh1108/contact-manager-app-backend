# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the port from .env
EXPOSE 5001

# Default command
CMD ["npm", "start"]
