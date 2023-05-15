import { useState } from 'react';
import CartDrawer from './CartDrawer';

const Cart = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          onClick={toggleDrawer}
        >
          Cart
        </button>
      </div>

      {isOpen && <CartDrawer onClose={toggleDrawer} />}
    </>
  );
};

export default Cart;
