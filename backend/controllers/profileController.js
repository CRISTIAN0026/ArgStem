import profileModel from "../models/profile.js";
import hashPassword from "../helpers/hashPassword.js";
import bcrypt from 'bcrypt';
import generarToken from "../helpers/generarToken.js";

/** Show all the profiles, for admin only
 *
 * @param {*} req
 * @param {*} res
 */
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await profileModel.findAll();
        res.json(profiles);
    } catch (error) {
        res.status(400).json(error);
    }
};

/** Get the profile by id, to update or delete
 * 
 * @param {*} req
 * @param {*} res
 */
export const getProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await profileModel.findOne({ where: { id } });
        res.json(profile);
    } catch (error) {
        res.status(400).json(error);
    }
};

/** Create profile
 * 
 * @param {*} req
 * @param {*} res
 */
export const createProfile = async (req, res) => {
    try {
        req.body.password = await hashPassword(req.body.password);
        req.body.token = await generarToken();
        await profileModel.create(req.body);
        res.json({ msg: 'Profile created succesfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

/** Update profile
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    const profileExist = await profileModel.findOne({ where: { id } });
    try {
        if (password) {
            req.body.password = await hashPassword(req.body.password);
        }
        if (!profileExist) {
            return res.status(404).json({ msg: 'perfil no encontrado' });
        } else {
            await profileModel.update(req.body, { where: { id } });
            return res.json({ msg: 'profile updated successfully' });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};


/** Delete a profile from database
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

export const deleteProfile = async (req, res) => {
    const { id } = req.params;
    const profileExist = await profileModel.findOne({ where: { id } })
    try {
        if (!profileExist) {
            res.status(404).json({ msg: 'perfil no encontrado' });
        } else {
            await profileModel.destroy({ where: { id } });
            return res.json({ msg: 'profile delete succesfully' })
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

/** login system
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await profileModel.findOne({ where: { email } });

    if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
    };

    const passwordSuccess = await bcrypt.compare(password, user.password);
    if (!passwordSuccess) {
        return res.status(404).json({ msg: 'Contraseña incorrecta' });
    };

    if (!user.active) {
        return res.status(404).json({ msg: 'Usuario bloqueado en la plataforma, contactese con el administrador para mas informacion' });
    }

    res.json({msg: user.token});
}

/** Update the active state from the user
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

export const updateActive = async (req, res) => {
    const { id } = req.params;
    const { activeInput } = req.body;
    const profile = await profileModel.findOne({ where: { id } });
    if (!profile) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
    } else {
        if (activeInput === 0) {
            profile.active = false;
            await profile.save();
            return res.json({ msg: 'Usuario bloqueado!' });
        } else {
            profile.active = true;
            await profile.save();
            return res.json({ msg: 'Usuario desbloqueado!' });
        }
    }
};