FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Ustaw porty
EXPOSE 3000
EXPOSE 4173

CMD ["npm", "run", "dev"]
