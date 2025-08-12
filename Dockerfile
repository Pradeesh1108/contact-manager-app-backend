FROM node:24-alpine

#Create app dir
WORKDIR /app

#Intall app dependancies

COPY packagae*.json ./

#Run npm install

RUN npm install

#Bundle app source
COPY . .

EXPOSE 5001

CMD  ["npm", "start"]