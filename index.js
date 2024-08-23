const express = require("express")
const cors = require('cors');  // npm i cors
const app = express();

app.use(cors());
 
const port = 3000

app.use(express.json())

const db = require("./models")

// para sincronizar cambios en la DB, usar:   .sync({alter:true})

db.sequelize.sync(   )
.then(() => {
    console.log("Base de datos conectada")
})
.catch((error) => {
    console.log("Error al conectar la base de datos")
})

require("./routes/index.routes")(app)


// incia el servidor (queda escuchando peticiones)
app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto ", port)
})