import db from "../database/db.js";
import { DataTypes } from "sequelize";

const resourceModel = db.define('resources', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    resource: DataTypes.STRING,
    idSubjects: DataTypes.INTEGER,
    IdProfiles: DataTypes.INTEGER,
    approve: {type: DataTypes.BOOLEAN, defaultValue: false}
});

export default resourceModel;