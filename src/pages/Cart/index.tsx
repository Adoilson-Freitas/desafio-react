import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";
import { useLayoutEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  frete: number;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();
  const [sublinhar, setSublinhar] = useState("");
  const [total, settotal] = useState(0);

  const cartSize = cart.length;
  const history = useHistory();

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormated: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
    freteTotal: formatPrice(product.frete * product.amount),
  }));

  useEffect(() => {
    cart.reduce((sumTotal, product) => {
      let fretefree = sumTotal + product.price * product.amount; //total sem frete

      let frete =
        sumTotal +
        product.price * product.amount +
        product.frete * product.amount; //total com frete

      if (fretefree > 250) {
        settotal(fretefree);
        setSublinhar("sublinhar");
        return fretefree;
      } else {
        settotal(frete);
        setSublinhar("");
        return frete;
      }
    }, 0);
  });

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  useLayoutEffect(() => {
    if (cartSize === 0) {
      history.push("/cart-empty");
    }
  });

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt="Melhores jogos para você!" />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input type="text" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong className="subtotal">
                  <span>Subtotal: </span>
                  {product.subTotal}
                </strong>
                <strong className={`${sublinhar} frete`}>
                  Frete: <span> {product.freteTotal}</span>
                </strong>
              </td>

              <button
                className="delete"
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} />
              </button>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
