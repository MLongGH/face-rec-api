FROM node:12.14.1

WORKDIR /usr/src/face-rec-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]