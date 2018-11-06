# base image
FROM node:10

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN npx yarn install

# start app
CMD ["npx", "yarn", "run", "start:dev"]