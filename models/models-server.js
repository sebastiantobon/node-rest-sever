const express = require("express");
var cors = require("cors");

const { dbConnection } = require("../database/config")

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.endPointUsersPath = "/api/users";

    // Conectar a base de datos
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }


  middlewares() {
    //CORS
    this.app.use( cors() );

    // Lectura y Parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.endPointUsersPath, require("../routes/userRoutes"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
