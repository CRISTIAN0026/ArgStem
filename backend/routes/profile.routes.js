import express from "express";
import { getAllProfiles, getProfile,createProfile, updateProfile, deleteProfile, login, updateActive } from "../controllers/profileController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get('/:token',checkAuth, getAllProfiles);

router.post('/', createProfile);

router.route('/:token/:id')
    .get(checkAuth, getProfile)
    .put(checkAuth, updateProfile)
    .delete(checkAuth, deleteProfile);

router.put('/active/:token/:id', checkAuth, updateActive);

router.post('/login', login);
export default router;