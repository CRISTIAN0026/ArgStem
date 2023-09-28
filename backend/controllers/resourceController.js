import { where } from "sequelize";
import profileModel from "../models/profile.js";
import resourceModel from "../models/resource.js";


/** Show all the approve resources
 * 
 * @param {*} req
 * @param {*} res
 */
export const getAllResourcesApprove = async (req, res) => {
    try {
        const resources = await resourceModel.findAll({ where: { approve: true } });
        res.json(resources);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// 
export const getAllResources = async (req, res) => {
    try {
        const resources = await resourceModel.findAll();
        res.json(resources);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

/** Get one resource by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getResource = async (req, res) => {
    const { id } = req.params;
    const resource = await resourceModel.findOne({ where: { id } });
    try {
        res.json(resource);
    } catch (error) {
        res.status(400).json(error);
    }
};

/** get all the upload resources by the user logged in
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getAllMyResource = async (req, res) => {
    const { id } = await profileModel.findOne({ where: { token: req.params.token } });
    const myResources = await resourceModel.findOne({ where: { idProfiles: id } });
    try {
        res.json(myResources);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
};


/** Create and upload a resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const createResource = async (req, res) => {
    const profile = await profileModel.findOne({ where: { token: req.params.token } });
    req.body.idProfile = profile.id;
    try {
        const EDFile = await req.files.resource;
        function resourcefile() {
            const resourceName = EDFile.name.split('.')[0];
            const extenction = EDFile.name.split('.')[1];
            return `${resourceName}_${profile.token}.${extenction}`
        }
        await EDFile.mv(`./resources/${resourcefile()}`, err => {
            if (err) return res.status(500).send({ message: err });
        })
        req.body.resource = await resourcefile();
        await resourceModel.create(req.body);
        return res.json({ msg: 'resource upload succesfully!' })
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

/** Update a resource
 *
 * @param {*} req 
 * @param {*} res 
 */
export const updateResource = async (req, res) => {
    const { id } = req.params;
    const resourceExist = await resourceModel.findOne({ where: { id } });
    try {
        if (!resourceExist) {
            res.status(404).json({ msg: 'recurso no encontrado' })
        } else {
            await resourceModel.update(req.body, { where: { id } });
            res.json({ msg: 'resource updated succesfully' });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

/** Delete a resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const deleteResource = async (req, res) => {
    const { id } = req.params;
    const resourceExist = await resourceModel.findOne({ where: { id } });
    try {
        if (!resourceExist) {
            res.status(404).json({ msg: 'recurso no encontrado' })
        } else {
            await resourceModel.destroy({ where: { id } });
            res.json({ msg: 'resource deleted succesfully' });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

/** update state approved, to put in public view
 *
 * @param {*} req
 * @param {*} res
 */
export const updateApprove = async (req, res) => {
    const { id } = req.params;
    const { approveInput } = req.body;
    const resource = await resourceModel.findOne({ where: { id } });
    if (!resource) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
    } else {
        if (approveInput === 0) {
            resource.approve = true;
            await resource.save();
            return res.json({ msg: 'Recurso aprobado!' });
        } else {
            resource.approve = false;
            await resource.save();
            return res.json({ msg: 'Recurso desaprobado!' });
        }
    }
};