
FROM node:latest

WORKDIR /vue_project_test

COPY package.json .
COPY . . 
RUN npm install


WORKDIR /app

COPY package.json .
COPY . .  
RUN npm install


ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"] 

CMD npm run dev

