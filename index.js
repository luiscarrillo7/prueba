const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 API funcionando en Cloud Run!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});