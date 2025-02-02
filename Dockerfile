FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i 

COPY . . 

RUN npm run trainClassifier

EXPOSE 4000

CMD ["npm", "run", "dev"]