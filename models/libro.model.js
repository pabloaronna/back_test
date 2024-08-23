module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize 

    const Libro = sequelize.define("Libro", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_publicacion: {
            type: DataTypes.STRING,
            allowNull: false
        },        
        disponible: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })

    return Libro
}