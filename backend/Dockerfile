# Usa una imagen base de Node.js
FROM node:20

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del proyecto
COPY . .

# Expone el puerto de la aplicación
EXPOSE 3080

# Define el comando para iniciar el servidor
CMD ["npm", "run", "start"]
