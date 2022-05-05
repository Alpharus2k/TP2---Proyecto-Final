**Elementos necesarios:**
  *Descargar e Instalar:
  *Visual Studio Code
  *Git
  *Node.js (16.15)

---
**Iniciando un proyecto**
  * ```$ npm init -y```                 Inicia el proyecto y crea \_package.json\_ por default  
  * ```$ npm i express```               Instalamos el entorno de trabajo Express
  * ```$ npm i dotenv```                Instalamos Dotenv para controlar variables de entorno
  * ```$ npm i sequelize```             Instalamos Sequelize para manejar comunicación con Base de Datos [Click Aquí para más Info](https://www.npmjs.com/package/sequelize)
  * ```$ npm i ...```                   Agregar uno de los DB del link de la linea de arriba
  * Creamos el archivo ```index.js``` como principal
  * Creamos el archivo ```.env```  y ```.env.example``` para manejar los archivos de entorno
  * Creamos el archivo ```.gitignore```[Click Aquí](https://github.com/github/gitignore/blob/main/Node.gitignore)
  * ```$ npm install --save-dev nodemon```      Instalamos la utilidad de inferfaz Nodemon (Wrapper) 
  * ```$ npm install --global mocha```  Instalamos Mocha.js, dependencia para testing
  * ```$ npm install chai```            Instalamos Chai.js, dependencia para testing
  * Creamos las carpetas para el desarrollo ```./src/entities```, ```./src/repositories``` y ```./test```

---  
**Iniciando el Proyecto**
   * 
   * ```$ npm i``` para instalar devDependencies de *.json de configuracion
   * ```$ npm run dev``` para ejecutar el servidor con nodemon