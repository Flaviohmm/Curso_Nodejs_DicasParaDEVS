const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ecbsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log("Conexão com banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Ocorreu um erro ao se conectar com o banco de dados:", error);
    process.exit(1); // Encerra o processo em caso de erro
  }
};

module.exports = connectToDatabase;