import express from "express";
import cors from "cors";
import db from "./database/db.js";
import profileRoutes from "./routes/profile.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/profiles', profileRoutes);

try {
    db.authenticate();
    console.log('Connection database succesfully');
} catch (error) {
    console.log(`Connection database failed: ${error.message}`);
}

app.listen(4000, () => {
    console.log('Server up running in http://localhost:4000');
})