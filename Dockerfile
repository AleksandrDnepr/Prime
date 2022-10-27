FROM node:18-alpine AS static
ADD client /client
WORKDIR /client
RUN yarn install
RUN yarn build
ADD server /server
WORKDIR /server
RUN yarn install

FROM node:18-alpine
COPY --from=static server /server
COPY --from=static /client/build /server/static
WORKDIR /server
EXPOSE 3100
CMD yarn start

