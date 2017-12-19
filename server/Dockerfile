# I'm not using node:latest(or other version)  because I had issues with bcrypt and I could not fix :/
FROM ubuntu:17.04
RUN apt-get update && apt-get dist-upgrade -y && apt-get install -y build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y apt-transport-https && apt-get update && apt-get install -y yarn
RUN mkdir /server
WORKDIR /server
COPY . /server
RUN yarn install
EXPOSE 8080
CMD ["npm", "run", "dev3"]
