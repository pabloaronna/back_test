 
const db = require("../models")
const tablaPrincipal = db.libro

 

exports.crearNuevo = (req, res) => {
    const { titulo,fecha_publicacion, autorId, disponible    } = req.body

    tablaPrincipal.create({
        titulo,fecha_publicacion, autorId, disponible
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Creado OK  ",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear  ",
            status: 500,
            data: error
        })
    })
}

// retornar la info del modelo relacionado
exports.obtenerTodos = (req,res) => {
    tablaPrincipal.findAll({
        include:[
            {
                model: db.autor
            }            
        ]
    })
    .then((registros) => {
        console.log("envia registros")
        res.status(200).json({
            ok: true,
            msg: "Listado  ",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado  ",
            status: 500,
            data: error
        })
    })
}


exports.obtenerUnoPorId = (req, res) => {
    const _id = req.params.id
    tablaPrincipal.findOne({
        where: {id: _id}
    })
    .then((registro) => {
        if(registro){
            res.status(200).json({
                ok: true,
                msg: "No encontrado",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "No encontrado",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el item",
            status: 500,
            data: error
        })
    })
}


exports.actualizar = (req, res) => {
    const _id = req.params.id
    const { titulo,fecha_publicacion, autorId, disponible } = req.body

    tablaPrincipal.update({

        titulo,fecha_publicacion, autorId, disponible
    },
    {
        where: {id: _id}
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Actualizado OK",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar  ",
            status: 500,
            data: error
        })
    })
}



exports.eliminar = (req, res) => {
    const _id =  req.params.id
    tablaPrincipal.destroy({
        where: {id: _id}
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Eliminado OK",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar ",
            status: 500,
            data: error
        })
    })
}

