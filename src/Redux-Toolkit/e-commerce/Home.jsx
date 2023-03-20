import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './components/Cards';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { allTotalStuffs, getCartItems } from './redux/slices/cartSlice';

const Home = () => {
  const { items, isLoading, error } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTotalStuffs());
  }, [items]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (error.exist) {
    return (
      <div className="loading">
        <h1>{error.message}</h1>
      </div>
    );
  }

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
