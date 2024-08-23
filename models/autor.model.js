module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize 

    const Autor = sequelize.define("Autor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nacionalidad: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Autor
}