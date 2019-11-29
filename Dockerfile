FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install
RUN npm install -g ionic

COPY . /usr/src/app

EXPOSE 8100

CMD ionic serve --host 0.0.0.0
