# Use a base image with Node.js already installed
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire React app to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port your React app will run on (default is 80)
EXPOSE 80

# Define the command to run when the container starts
CMD ["npm", "start"]
