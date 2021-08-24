FROM ubuntu:20.04

#ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app


RUN apt-get update \
    && apt-get -y install curl \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
#    && apt-get install -y npm \
    && apt-get clean

#add user
RUN addgroup --gid 1000 dev \
    && useradd -u 1000 -g 1000 -s /bin/bash -d /home/developer developer \
    && mkdir /home/developer \
    && chown 1000:1000 /home/developer

EXPOSE 8080
