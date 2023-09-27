import { getAllProfiles, createProfile, updateProfile, deleteProfile } from "../controllers/profileController.js";
import express from "express";

const router = express.Router();

router.route('/')
    .get( getAllProfiles)
    .post(createProfile);

router.route('/:id')
    .put(updateProfile)
    .delete(deleteProfile);

export default router;