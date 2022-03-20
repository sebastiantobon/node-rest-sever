const { request } = require("express");
const { response } = require("express");



const usersGet = (req = request, res = response ) => {

    const query = req.query

    res.json({
      msg: "get API - controlador",
      query
    });
  }


  const usersPost =  (req = request, res = response) => {

    const body = req.body;

    res.json({
      msg: "post API",
      body
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

