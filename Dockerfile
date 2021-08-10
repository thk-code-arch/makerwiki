FROM node:14.5.0-slim 

# Create app directory
WORKDIR /app
EXPOSE 8080
CMD npm install && npm run dev