FROM node:14.17.4-slim

# Create app directory
WORKDIR /app
EXPOSE 8080
CMD npm install && npm run dev