const mongoose = require("mongoose")

const URL = process.env.MONGODB_ATLAS;

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

const dbConnection = async() => {

    try {

         await mongoose.connect(URL, options);

        console.log("base de datos online");

    } catch (error){
        console.log(error);
        throw new Error("Error al iniciar la base de datos");
    }

}

module.exports = {
    dbConnection
}