import express from 'express';
import tiqueteraRoutes from "../Tiquetera/infraestructure/routes/tiqueteraRoutes.js";

const app = express();

app.use(express.json());

// Rutas corregidas:
app.use("/tiquetera", tiqueteraRoutes);

export default app;