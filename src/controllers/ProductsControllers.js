import model from '../models/Products.js'


const getProducts = async (req, res) => {
    const data = await model.getProducts();
    res.send(data);
}

const getProduct = async (req, res) => {
    const data = await model.getProduct(req.params.id);
    res.send(data);
}

const postProduct = async (req, res) => {
    const data = await model.postProduct(req.body);
    res.send(data);
}

const updProduct = async (req, res) => {
    const data = await model.updProduct(req.params.id, req.body);
    res.send(data ? 'si se modificó' : 'no se modificó');
}

const delProduct = async (req, res) => {
    const data = await model.delProduct(req.params.id);
    res.send(data ? 'si se borró' : 'no se borró');
}

const getProductByMinPrice = async (req, res) => {
    const data = await model.getProductsByMinPrice(req.params.precio);
    res.send(data);
}

const controller = {
    getProductByMinPrice,
    getProducts,
    getProduct,
    postProduct,
    updProduct,
    delProduct
};

export default controller;

