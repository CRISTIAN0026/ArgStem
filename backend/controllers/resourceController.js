import resourceModel from "../models/resource.js";

// Show all resources
export const getAllResources = async (req, res) => {
    try {
        const resources = await resourceModel.findAll();
        res.json(resources);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getResource = async (req, res) => {
    const { id } = req.params;
    const resource = await resourceModel.findOne({ where: { id } });

    try {
        res.json(resource);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Create resource
export const createResource = async (req, res) => {
    try {
        await resourceModel.create(req.body);
        res.json({ msg: 'resource upload succesfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// Update resource
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

// Delete resource
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
}