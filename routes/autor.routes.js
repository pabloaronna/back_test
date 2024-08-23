const  Rutas = require("express").Router()
const controladorPrincipal =  require("../controllers/autor.controller")

Rutas.get("/", controladorPrincipal.obtenerTodos)
Rutas.get("/id:", controladorPrincipal.obtenerUnoPorId)
Rutas.post("/", controladorPrincipal.crearNuevo)
Rutas.put("/id:", controladorPrincipal.actualizar)
Rutas.delete("/id:", controladorPrincipal.eliminar)


module.exports = Rutas
