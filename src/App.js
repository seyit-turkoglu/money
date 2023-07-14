import "./App.css";
import { useEffect, useState } from "react";
import Header from "./compenents/Header";
import products from "./products.json";
import Product from "./compenents/Product";
import Basket from "./compenents/Basket";
function App() {
  const [money] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <>
      <Header total={total} money={money}></Header>
      
      <div className="container products">
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
          </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          basket={basket}
          products={products}
          total={total}
        />
      )}
    </>
  );
}

export default App;
