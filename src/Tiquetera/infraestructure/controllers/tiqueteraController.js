import TiqueteraRepositoryMongo from "../repositories/tiqueteraRepositoryMongo.js";
import CreateTiquetera from "../../../application/use-case/createTiquetera.js";
import DeleteTiquetera from "../../../application/use-case/deleteTiquetera.js";
import GetTiquetera from "../../../application/use-case/GetTiquetera.js";
import GetTiqueteraById from "../../../application/use-case/GetTiqueteraById.js";
import UpdateTiquetera from "../../../application/use-case/UpdateTiquetera.js";

const tiqueteraRepository = new TiqueteraRepositoryMongo();
export const createTiquetera = async (req, res) => {
    try{
        const createTiquetera = new CreateTiquetera(tiqueteraRepository);
        const tiquetera = await createTiquetera.execute(req.body);
        res.status(201).json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTiquetera = async (req, res) => {
    try{
        const getTiquetera = new GetTiquetera(tiqueteraRepository);
        const tiquetera = await getTiquetera.execute();
        res.status(200).json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTiqueteraById = async (req, res) => {
    try{
        const getTiqueteraById = new GetTiqueteraById(tiqueteraRepository);
        const tiquetera = await getTiqueteraById.execute(req.params.id);
        res.status(200).json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateTiquetera = async (req, res) => {
    try {
        const updateTiquetera = new UpdateTiquetera(tiqueteraRepository);
        const tiquetera  = await updateTiquetera.execute(req.params.id, req.body);
        if (!tiquetera) return res.status (404).json({ message: "tiquetera no encontrada" });
        res.json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteTiquetera = async (req, res) => {
    try {
        const deleteTiquetera = new DeleteTiquetera(tiqueteraRepository);
        const result = await deleteTiquetera.execute(req.params.id);
        if (!result) return res.status(404).json({ message: "Tiquetera no encontrada" });
        res.json({ message: "Tiquetera eliminada correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};