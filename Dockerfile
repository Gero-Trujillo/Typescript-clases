FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /home/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install
RUN npm run tsc

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Define el comando para ejecutar la aplicación
CMD ["node", "./dist/index.js"]