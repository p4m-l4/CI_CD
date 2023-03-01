#Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile.
FROM node:12 

#Set the working directory for any subsequent ADD,COPY,CMD,ENTRYPOINT, or RUN instructions that follow it in the Dockerfile.
WORKDIR /app

#Copy files or folders from source to the destination path in the image's filesystem.
COPY package*.json ./

#Execute any commands on top of the current image as a new layer and commit the results.
RUN npm install

#Copy files or folders from source to the dest path in the image's filesystem. In this case, we are copying all files in the app
COPY . .

#Set the environment variable key to the value.
ENV PORT=3000

#Define the network ports that this container will listen on at runtime.
EXPOSE 3000
