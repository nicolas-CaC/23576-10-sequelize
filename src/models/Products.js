import { sequelize } from "../config/connection.js";
import { Model, INTEGER, STRING, Op } from 'sequelize';


class Products extends Model { }

Products.init(
    {
        id: { type: INTEGER, allowNull: false, primaryKey: true },
        nombre: { type: STRING, allowNull: false },
        precio: { type: INTEGER, allowNull: false }
    },
    {
        sequelize,
        modelName: 'productos',
        timestamps: false,
    }
);

const getProducts = () => {
    let data =
        Products.findAll()
            .then(products => products.map(product => product.dataValues))
            .catch(err => false);
    return data;
}


const getProduct = async (id) => {
    const data = await Products.findOne({ where: { id } });
    return data;
}


const postProduct = async (data) => {
    const result = await Products.create(data);
    return result;
}


const updProduct = async (id, data) => {
    const result = await Products.update(data, { where: { id } })
    return result[0];
}


const delProduct = async (id) => {
    const result = await Products.destroy({ where: { id } });
    return result;
}


const getProductsByMinPrice = async (price) => {
    const result = await Products.findAll(
        {
            where: {
                precio: { [Op.gt]: price }
            },
        });
    return result;
}

const model = {
    getProductsByMinPrice,
    getProducts,
    getProduct,
    postProduct,
    updProduct,
    delProduct
}

export default model;