FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the source code
COPY . .

# Ensure Jest is available for running tests (install Jest if not present)
RUN npm install --save-dev jest

# Default command to run tests
CMD ["npm", "test"]