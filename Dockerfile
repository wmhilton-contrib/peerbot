FROM node:6
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
    && rm -rf /var/lib/apt/lists/*
RUN npm install -g node-gyp
RUN npm install -g electron-prebuilt electron-spawn github:wmhilton/peerbot#dockerize
ENTRYPOINT xvfb-run peerbot
