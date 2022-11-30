FROM node:18-alpine AS static
ADD client /client
WORKDIR /client
RUN yarn install
RUN yarn build
ADD admin-ui /admin
WORKDIR /admin
RUN yarn install
RUN yarn build


FROM node:18-alpine
ENV NODE_ENV=production
ADD server /server
WORKDIR /server
COPY --from=static /client/build /server/static
COPY --from=static /admin/build /server/static/admin

RUN yarn install --production
EXPOSE 80
CMD yarn serve