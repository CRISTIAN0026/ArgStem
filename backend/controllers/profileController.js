import profileModel from "../models/profile.js";
import hashPassword from "../helpers/hashPassword.js";

// * CRUD METHOD

// Get all profiles
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await profileModel.findAll();
        res.json(profiles);
    } catch (error) {
        res.status(400).json(error);
    }
}; // It works

// Create new profile, to log in
export const createProfile = async (req, res) => { 
    try {
        req.body.password = await hashPassword(req.body.password);
        await profileModel.create(req.body);
        res.json('Profile created succesfully');
    } catch (error) {
        res.status(400).json(error.message);
    }
}; // It works

// Update a profile
export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    if (password) {
        req.body.password = await hashPassword(req.body.password);
    }
    try {
        await profileModel.update(req.body, { where: { id } });
        res.json({ msg: 'profile updated successfully' });
    } catch (error) {
        res.status(400).json({ error });
    }
}; // It works

// Delete a profile
export const deleteProfile = async (req, res) => {
    const { id } = req.params;
    try {
        await profileModel.destroy({ where: { id } });
        res.json({ msg: 'profile delete succesfully' })
    } catch (error) {
        res.status(400).json(error);
    }
}; // It works