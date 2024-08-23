module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize 

    const Cliente = sequelize.define("Cliente", {
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
        },       
        email_solicitante: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefonos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })

    return Cliente
}