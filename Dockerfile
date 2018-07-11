FROM node:8.9.3-alpine

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["node", "index.js"]