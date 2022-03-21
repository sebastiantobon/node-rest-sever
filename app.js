require('dotenv').config();
const Server = require('./models/models-server');



const sever = new Server();


sever.listen();