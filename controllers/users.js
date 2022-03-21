const { request } = require("express");
const { response } = require("express");
const bcrypt = require('bcryptjs');
const User = require("../models/user");


const usersGet = (req = request, res = response ) => {

    const query = req.query

    res.json({
      msg: "get API - controlador",
      query
    });
  }


  const usersPost = async (req = request, res = response) => {

    const {name, email, password, rol } = req.body;
    const user = new User({name ,email, password, rol });

    // Verificar si el correo existe

    // hacer el hash del password (Encriptar)

    // el sal es basicamente el numero de vueltas para hacer mas complicado para desencriptar 
    // tiene por defecto un valor de 10 entre mas alto sea el numero mas complejo es el encriptado
    const salt = bcrypt.genSaltSync(); 
    // creando el hash del password
    user.password = bcrypt.hashSync(password, salt)


    // Guardar en DB
    await user.save();

    res.json({
      msg: "post API",
      user
    });
  }

  const usersPut = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
      msg: "put API",
      id
    });
  }


  const usersDelete = (req = request, res = response) => {
    res.json({
      msg: "delete API",
    });
  }

  const usersPatch = (req = request, res = response) => {
    res.json({
      msg: "patch API",
    });
  }


  module.exports = {
      usersGet,
      usersPatch,
      usersPost,
      usersPut, 
      usersDelete 
  }

