import db from "../database/db.js";
import { DataTypes } from "sequelize";

/**
 * resources model
 */

const resourceModel = db.define('resources', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    resource: DataTypes.STRING,
    idSubjects: DataTypes.INTEGER,
    approve: { type: DataTypes.BOOLEAN, defaultValue: false },
    idProfile: DataTypes.INTEGER,
});

export default resourceModel;