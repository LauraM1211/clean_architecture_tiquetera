import "dotenv/config.js";
import connectDB from "./Tiquetera/config/database.js";
import app from "./interface/server.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
    });
});