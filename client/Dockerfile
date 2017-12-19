FROM node:9.3.0-alpine
RUN mkdir /client
WORKDIR /client
COPY . /client
RUN yarn install
EXPOSE 3000
CMD ["yarn", "run", "start"]
