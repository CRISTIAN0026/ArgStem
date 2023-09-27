import express from 'express';
import { getAllResources, getResource,createResource, updateResource, deleteResource } from '../controllers/resourceController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.route('/')
    .get(getAllResources)
    .post(createResource);

router.route('/:token/:id')
    .get(checkAuth, getResource)
    .put(checkAuth, updateResource)
    .delete(checkAuth, deleteResource);

export default router;