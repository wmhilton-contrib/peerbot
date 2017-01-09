FROM node:0.12
# git clone -b dockerize https://github.com/wmhilton/peerbot && cd peerbot
# !!! WARNING !!! I have no idea if this works yet!!!
RUN apt-get update && apt-get install -y --no-install-recommends \
    xvfb \
    xauth \
    libgtk2.0 \
    libnotify4 \
    libconfig9 \
    libxtst6 \
    libgconf-2-4 \
    libnss3 \
    libasound2 \
    libXss1 \
    && rm -rf /var/lib/apt/lists/*
RUN npm install -g node-gyp electron-prebuilt electron-spawn
COPY . /tmp/stuff
RUN npm install -g github:wmhilton/peerbot#dockerize
ENTRYPOINT xvfb-run peerbot
