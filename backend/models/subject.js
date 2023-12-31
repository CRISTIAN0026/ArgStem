import db from "../database/db.js";
import { DataTypes } from "sequelize";
import resourceModel from "./resource.js";

/**
 * subject model
 */

const subjectModel = db.define('subjects', {
    subject: DataTypes.STRING,
});

export default subjectModel;