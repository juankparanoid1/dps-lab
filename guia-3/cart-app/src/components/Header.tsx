import React, { useState } from 'react'
import { Products } from '../data/data'

export interface Props {
  productList: Products[],
  setProductList: (newValue: Products[]) => void,
  total: number,
  countProducts: number,
  setCountProducts: (newValue: number) => void,
  setTotal: (newValue: number) => void,
}

export const Header = ({
  productList,
  setProductList,
  total,
  countProducts,
  setCountProducts,
  setTotal
}: Props) => {

  const [active, setActive] = useState(false);

  const onDeleteProduct = (product: Products) => {
    const results = productList.filter(
      prod => prod.id !== product.id
    );
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setProductList(results);
  };

  const onCleanCart = () => {
    setProductList([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <h1>Tienda de Libros</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img src='https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png' alt='carrito' className='icon-cart' />
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>
        <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
          {
            productList.length ? (
              <>
                <div className='row-product'>
                  {
                    productList.map((product: Products) => (
                      <div className='cart-product' key={product.id}>
                        <div className='info-cart-product'>
                          <span className='cantidad-producto-carrito'>{product.quantity}</span>
                          <p className='titulo-producto-carrito'>{product.title}</p>
                          <span className='precio-producto-carrito'>${product.price}</span>
                          {/* product img */}
                          <img className='img-producto-carrito' src={product.urlImage}></img>
                        </div>
                        <img src='https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png' alt='cerrar' className='icon-close' onClick={() => onDeleteProduct(product)} />
                      </div>
                    ))
                  }
                </div>
                <div className='cart-total'>
                  <h3>Total:</h3>
                  <span className='total-pagar'>${total}</span>
                </div>
                <button className='btn-clear-all' onClick={onCleanCart}></button>
              </>
            ) : (
              <>
                <p className='cart-empty'>El carrito está vacío</p>
              </>
            )
          }
        </div>
      </div>
    </header >
  )
}
