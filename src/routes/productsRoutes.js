import express from 'express';
import controller from '../controllers/ProductsControllers.js';

const router = express.Router();

router
    .get('/', controller.getProducts)
    .post('/', controller.postProduct)

    .get('/:id', controller.getProduct)
    .put('/:id', controller.updProduct)
    .delete('/:id', controller.delProduct)

    .get('/price/:precio', controller.getProductByMinPrice)

export default router;