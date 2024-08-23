module.exports = (app) => {
    const rutasAutor = require("./autor.routes")
    app.use("/autor", rutasAutor)
 
    const rutasLibro = require("./libro.routes")
    app.use("/libro", rutasLibro)
 
    const rutasPrestamo = require("./prestamo.routes")
    app.use("/prestamo", rutasPrestamo) 
}