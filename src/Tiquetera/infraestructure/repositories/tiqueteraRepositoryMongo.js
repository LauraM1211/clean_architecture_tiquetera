import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
    nrotiquetera: String,
    cliente: String,
    saldo: Number,
    totaltransacciones: Number,
    observaciones: String,
});

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema); //creamos el modelo de la base de datos

class tiqueteraRepositoryMongo {
    async create(tiqueteraData) {
        const user = new TiqueteraModel(tiqueteraData);
        return await user.save();
    }

    async findAll() {
        return await TiqueteraModel.find();
    }

    async findById(id) {
        return await  TiqueteraModel.findById(id);
    }

    async update(id, tiqueteraData){
        return await TiqueteraModel.findByIdAndUpdate(id, tiqueteraData, { new: true });
    }

    async delete(id){
        return await TiqueteraModel.findByIdAndDelete(id);
    }
}

export default tiqueteraRepositoryMongo;