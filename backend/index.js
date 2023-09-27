import express from "express";
import cors from "cors";
import db from "./database/db.js";
import profileRoutes from "./routes/profile.routes.js";
import subjectRoutes from "./routes/subject.routes.js";
import resourceRoutes from "./routes/resource.routes.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use('/api/profiles', profileRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/resources', resourceRoutes);

try {
    db.authenticate();
    console.log('Connection database succesfully');
} catch (error) {
    console.log(`Connection database failed: ${error.message}`);
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server up running in http://localhost:${PORT}`);
});