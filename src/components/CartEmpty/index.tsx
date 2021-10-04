import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';
import { useCart } from '../../hooks/useCart';
import { useLayoutEffect } from 'react';

const CartEmpty
 = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length
  const history = useHistory();

  useLayoutEffect(() => {
    if (cartSize !== 0) {
        history.push("/cart");
    }
  },);
  return (
    <Container>
        <p>Carrinho vazio!</p>
        <Link to="/">voltar</Link>
    </Container>
  );
};

export default CartEmpty
;
