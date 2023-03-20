import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../redux/slices/modalSlice';
import Card from './Card';

const Cards = () => {
  const { amountOfItems, totalPrice, items } = useSelector(store => store.cart);

  const dispatch = useDispatch();

  const modalOpener = () => {
    dispatch(openModal());
  };

  return (
    <div>
      {amountOfItems < 1 ? (
        <h4 className="empty-cart">Currently Empty</h4>
      ) : (
        <div className='techs'>
          <section className="cart">
            <header>
              <h2>Your bag</h2>
            </header>
            <div>
              {items?.map(item => {
                return <Card key={item.id} {...item} />;
                // to destruct them on child element ⤴
              })}
            </div>
            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  Total <span>{totalPrice.toFixed(2)}</span>
                </h4>
              </div>
              <button onClick={modalOpener} className="btn clear-btn">
                Clear Cart
              </button>
            </footer>
          </section>
          <section className="cart">
            <header>
              <h2>Your bag</h2>
            </header>
            <div>
              {items?.map(item => {
                return <Card key={item.id} {...item} />;
                // to destruct them on child element ⤴
              })}
            </div>
            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  Total <span>{totalPrice.toFixed(2)}</span>
                </h4>
              </div>
              <button onClick={modalOpener} className="btn clear-btn">
                Clear Cart
              </button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
};

export default Cards;
