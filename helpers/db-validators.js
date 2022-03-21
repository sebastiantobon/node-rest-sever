const Role = require("../models/models-role");


const ValidatorErrorRol = async (rol = "") => {
    const existRol = await Role.findOne({rol})
    if(!existRol){
      throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    } 
  }


module.exports = {
    ValidatorErrorRol
}