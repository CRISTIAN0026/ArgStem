import subjectModel from "../models/subject.js";


/**
 *Show all subjects 
 * @param {*} req 
 * @param {*} res 
 */
export const getAllSubjects = async (req, res) => {
    try {
        const subjects = subjectModel.findAll();
        res.json(subjects);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
};

/**
 * filter by individual subjects
 * @param {*} req 
 * @param {*} res 
 */
export const getSubject = async (req, res) => {
    const { id } = req.params;
    try {
        const subject = await subjectModel.findOne({ where: { id } });
        res.json(subject);
    } catch (error) {
        res.status(400).json(error);
    }
};

/**
 * Create a subject 
 * @param {*} req 
 * @param {*} res 
 */

export const createSubject = async (req, res) => {
    try {
        await subjectModel.create(req.body);
        res.json({ msg: 'Tema creado exitosamente' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

/**
 * update a subject
 * @param {*} req 
 * @param {*} res 
 */

export const updateSubject = async (req, res) => {
    const { id } = req.params;
    const subjectExist = await subjectModel.findOne({ where: { id } });
    try {
        if (!subjectExist) {
            res.status(404).json({ msg: 'tema no encontrado' });
        } else {
            await subjectModel.update(req.body, { where: { id } });
            res.json({ msg: 'Tema actualizado Exitosamente' });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

/**
 * Delete a subject
 * @param {*} req 
 * @param {*} res 
 */

export const deleteSubject = async (req, res) => {
    const { id } = req.params;
    const subjectExist = await subjectModel.findOne({ where: { id } });
    try {
        if (!subjectExist) {
            res.status(404).json({ msg: 'tema no encontrado' });
        } else {
            await subjectModel.destroy({ where: { id } });
            res.json({ msg: 'subject deleted succesfully' });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};