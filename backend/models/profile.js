import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const profileModel = db.define('profiles', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    idRols: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    idRols: DataTypes.INTEGER,
    active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export default profileModel;