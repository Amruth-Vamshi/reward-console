FROM node:16.13.0-alpine AS build
RUN mkdir -p /app
ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build


FROM node:16.13.0-alpine
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Kolkata /etc/localtime && echo "Asia/Kolkata" >  /etc/timezone && apk del tzdata
COPY --from=build /app /app
ARG SERVER_RELEASE_VERSION
ENV SERVER_RELEASE_VERSION=${SERVER_RELEASE_VERSION}
RUN echo $SERVER_RELEASE_VERSION
WORKDIR /app
EXPOSE 3000
