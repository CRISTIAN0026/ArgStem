import profileModel from "../models/profile.js";

/**
 * user authentication function
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns user authentication and login to the site. If the parameters are not met, it does not allow login.
 */

const checkAuth = async (req, res, next) => {
    const { token } = req.params;
    const profile = await profileModel.findOne({ where: { token } })
    if (!profile) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
    }
    next();
};

export default checkAuth;