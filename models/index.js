const Sequelize = require("sequelize")
const config = require("../config/index.config")

const sequelize = new Sequelize(
    config.db.schema,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
        port: config.db.port
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


// definiciones de modelos
db.cliente = require("./cliente.model")(sequelize, Sequelize)
db.autor = require("./autor.model")(sequelize, Sequelize)
db.libro = require("./libro.model")(sequelize, Sequelize)
db.prestamo = require("./prestamo.model")(sequelize, Sequelize)
db.prestamoXLibro = require("./prestamoXLibro.model")(sequelize, Sequelize)

// relaciones entre modelos

// relacion 1 a muchos
// un autor puede escribir muchos libros
db.autor.hasMany(db.libro);
// un libro pertenece a un solo autor
db.libro.belongsTo(db.autor);

// relaciones muchos a muchos
// un libro puede tener mucho prestamosXLibro
db.libro.hasMany(db.prestamoXLibro);
// un prestamo puede tener muchos prestamosXLibro
db.prestamo.hasMany(db.prestamoXLibro);
// un prestamoXlibro solo tiene un libro
db.prestamoXLibro.belongsTo(db.libro)
// un prestamoXlibro solo tiene un prestamo
db.prestamoXLibro.belongsTo(db.prestamo)

// relacion de clientes con prestamos
// un cliente puede tener muchos prestamos
db.cliente.hasMany(db.prestamo);
// un prestamo tiene un cliente
db.prestamo.belongsTo(db.cliente);



module.exports = db