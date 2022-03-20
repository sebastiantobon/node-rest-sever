const express = require("express");
const res = require("express/lib/response");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.endPointUsersPath = "/api/users";

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();
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
  
    this.app.use(this.endPointUsersPath, require("../routes/user"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
