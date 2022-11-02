FROM node:18-alpine AS static
ADD client /client
WORKDIR /client
RUN yarn install
RUN yarn build


FROM node:18-alpine
ENV NODE_ENV=production
COPY --from=static /client/build /server/static
ADD server /server
WORKDIR /server
RUN yarn install --production
EXPOSE 80
CMD yarn serve


