import profileModel from "../models/profile.js";

const checkAuth = async (req, res, next) => {
    const profile = await profileModel.findOne({ where: { token: req.params.token } })
    if (!profile) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
    }
    next();
};

export default checkAuth;