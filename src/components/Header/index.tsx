import { Link } from 'react-router-dom';
import { MdGames } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';

import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length

  return (
    <Container>
      <Link to="/">
        <MdGames size={58} />
        <h1>MyGames</h1>
      </Link>

      <Cart to="/cart">
        <div>
          <FiShoppingCart size={36} color="#FFF" />
          <span>{cartSize}</span>
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
