FROM node:17-alpine

WORKDIR /S3-IP-Frontend_Bikers

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm i react-scripts

RUN npm run build

CMD [ "npm", "start" ]