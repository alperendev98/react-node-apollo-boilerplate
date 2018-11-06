FROM node:10

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN npx yarn install

COPY . .

EXPOSE 8080

CMD ["npx", "yarn", "run", "start:dev"]

