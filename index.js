const server = require('./src/app.js');
const PORT = process.env.PORT
  server.listen(PORT , ()=>{
    console.log(`Levantado en el puerto ${PORT}`)
  });


module.exports = server
