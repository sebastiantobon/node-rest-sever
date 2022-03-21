
const {Schema, model} = require("mongoose")


const UserSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligataorio"]
    },
    email: {
        type: String,
        required: [true, "El correo es obligataorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contrasena es obligataorio"],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ["ADMIN_ROLE", "USER_ROLE"]
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

UserSchema.methods.toJSON = function() {
    const {__v, password, ...user } = this.toObject();
    return user;
}


module.exports = model("User", UserSchema);