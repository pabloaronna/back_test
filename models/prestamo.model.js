module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize 

    const Prestamo = sequelize.define("Prestamo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        fecha_prestamo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_devolucion: {
            type: DataTypes.STRING,
            allowNull: true
        },
     
    })

    return Prestamo
}