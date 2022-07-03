require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const app = express();

// Se indica que se usará cors
app.use(cors());
// Se indica que recibirá datos del tipo JSON
app.use(express.json());
// Se indica a express que utilice los recursos estáticos/ públicos e indicamos en que
// directorio se encuentra
app.use(express.static('storage'));
// Se indica el puerto de inicialización
const port = process.env.PORT || 3000;

// Se llama a las rutas
// TODO: Cuando se acceda a http://localhost/api/*
app.use("/api", require("./routes"));

//Se inicializa el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

dbConnect();
