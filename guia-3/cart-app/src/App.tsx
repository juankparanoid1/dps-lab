import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Products, data } from './data/data';

function App() {

  const [productList, setProductList] = useState<Products[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [countProducts, setCountProducts] = useState<number>(0);

  return (
    <>
      <Header
        productList={productList}
        setProductList={setProductList}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      ></Header>
      <ProductList
        productList={productList}
        setProductList={setProductList}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      ></ProductList>
    </>
  );
}

export default App;
