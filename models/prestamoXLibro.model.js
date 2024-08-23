module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize 

    const PrestamoXLibro = sequelize.define("PrestamoXLibro", {
         
        nombre_solicitante: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })

    return PrestamoXLibro
}

