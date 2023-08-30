import React from 'react'
import { Products, data } from '../data/data';

export interface Props {
    productList: Products[],
    setProductList: (newValue: Products[]) => void,
    countProducts: number,
    setCountProducts: (newValue: number) => void,
    total: number,
    setTotal: (newValue: number) => void,
}

export const ProductList = ({
    productList,
    setProductList,
    countProducts,
    setCountProducts,
    total,
    setTotal
}: Props
) => {
    const addProduct = (product: Products) => {
        console.log(productList)
        let productExists = productList.find(prod => prod.id === product.id);
        if (productExists) {
            productList = productList.map((prod: Products) => {
                return prod.id === product.id
                    ? {
                        ...prod,
                        quantity: prod.quantity + 1
                    }
                    : prod;
            });
        } else {
            productList.push(product)
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        return setProductList([...productList]);
    }
    return (
        <div className="container-items">
            {
                data.map(product => (
                    <div className="item" key={product.id}>
                        <figure>
                            <img src={product.urlImage} alt={product.title} />
                        </figure>
                        <div className="info-product">
                            <h2>{product.title}</h2>
                            <p className="price">${product.price}</p>
                            <button className="btn-add-cart" onClick={() => addProduct(product)}>Añadir al carrito</button>
                        </div>
                    </div>
                ))
            } </div>
    );
}