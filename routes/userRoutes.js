 const { Router } = require("express");
 const { check } = require("express-validator");
 const { ValidateCampos } = require("../middlewares/validar-campos");
 const { ValidatorErrorRol } = require("../helpers/db-validators");
 
const {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
} = require("../controllers/users");

const router = Router();

router.get("/", usersGet);

router.patch("/", usersPatch);

router.put("/:id", usersPut);

router.post("/", [
  check("name", "El nombre es obligatorio").not().isEmpty(),
  check("password", "El password debe ser mas de 6 letras").isLength({min: 6}),
  check("email", "El correo no es valido").isEmail(),
  // check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
  check("rol", "No es un rol valido").custom((rol) => ValidatorErrorRol(rol)),
  ValidateCampos
], usersPost);

router.delete("/", usersDelete);

module.exports = router;
