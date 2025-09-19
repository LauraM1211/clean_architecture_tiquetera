import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://lauramosm1109:12345@cluster0.68pc7qh.mongodb.net/clean_architecture_tiquetera?retryWrites=true&w=majority&appName=Cluster0",{
            // useNewUrlParser: true, //Nuevo parser de URL  de Mongodb
            // useUnifiedTopology: true // Nuevo motor de monitoreo de servidores
        });
        console.log("Conectado a la base de datos");
    } catch (error) {   
        console.log("Error de conexion",error);
        process.exit(1);//finaliza la ejecución si falla la connexión
    }
};

export default connectDB; 