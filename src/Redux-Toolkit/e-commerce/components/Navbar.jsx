import { useSelector } from 'react-redux';
import { CartIcon } from '../data/icons';
// hook to get value of global state

const Navbar = () => {
  const { amountOfItems } = useSelector(store => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amountOfItems}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
