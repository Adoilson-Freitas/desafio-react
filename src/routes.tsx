import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import CartEmpty from './components/CartEmpty';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/cart-empty" component={CartEmpty} />

    </Switch>
  );
};

export default Routes;
