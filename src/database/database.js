const mongoose = require("mongoose")

function ConnectToDatabase() {
    mongoose.connect('mongodb+srv://riosbergduttra:RkTcOij1VBeQZK84@cluster0.mcchf4l.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log("MongoDB conectado");
        }).catch((err) => {
            console.error(`Erro na conexão MongoDB: ${err}`);
        });
}

module.exports = ConnectToDatabase