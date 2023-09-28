import express from 'express';
import { getAllResourcesApprove, getAllResources, getResource, getAllMyResource, createResource, updateResource, deleteResource } from '../controllers/resourceController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.get('/', getAllResourcesApprove);


router.get('/:token', getAllResourcesApprove);

router.post('/:token', checkAuth, createResource);

router.get('/my-resources/:token', checkAuth, getAllMyResource);


router.route('/:token/:id')
    .get(checkAuth, getResource)
    .put(checkAuth, updateResource)
    .delete(checkAuth, deleteResource);

export default router;