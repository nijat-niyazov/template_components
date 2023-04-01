import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './component/Cards';
import Modal from './component/Modal';
import Navbar from './component/Navbar';
import { allTotalStuffs, getCartItems } from './redux/slices/cartSlice';

const Home = () => {
  const { items, isLoading } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTotalStuffs());
  }, [items]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {isOpen && <Modal />}
        <Cards />
      </main>
    </>
  );
};

export default Home;
