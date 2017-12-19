FROM node:9.3.0-alpine
# RUN apt-get update && apt-get dist-upgrade -y && apt-get install -y build-essential curl
# RUN apt-get -y install python-software-properties git
# RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
# RUN apt-get install -y nodejs
# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
# RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
# RUN apt-get install -y apt-transport-https && apt-get update && apt-get install -y yarn
RUN mkdir /client
WORKDIR /client
COPY . /client
RUN yarn install
EXPOSE 3000
CMD ["yarn", "run", "start"]
