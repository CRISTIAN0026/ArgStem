import { getAllSubjects, getSubject,createSubject, updateSubject, deleteSubject } from "../controllers/subjectcontroller.js";
import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route('/')
    .get(checkAuth, getAllSubjects)
    .post(checkAuth, createSubject);

router.route('/:token/:id')
    .get(checkAuth, getSubject)
    .put(checkAuth, updateSubject)
    .delete(checkAuth,deleteSubject);

export default router;