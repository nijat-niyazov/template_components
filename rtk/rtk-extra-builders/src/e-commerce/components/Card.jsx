import { useDispatch } from 'react-redux';
import { removeItem, toggleAmount } from '../redux/slices/cartSlice';

const Card = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  const removeItemfromCart = () => {
    dispatch(removeItem(id));
  };

  const toggleAmountOfItem = e => {
    if (amount < 2 && e.currentTarget.name === 'decrease') {
      dispatch(removeItem(id));
    }

    dispatch(
      toggleAmount({
        type: e.currentTarget.name === 'increase' ? 'increase' : 'decrease',
        id: id,
      })
    );
  };

  return (
    <article className="cart-item">
      <img src={img} alt={img} />
      <div className="">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={removeItemfromCart}>
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          name="increase"
          onClick={toggleAmountOfItem}
        >
          ⬆{' '}
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          name="decrease"
          onClick={toggleAmountOfItem}
        >
          {/* <ChevronDown /> */}⬇
        </button>
      </div>
    </article>
  );
};

export default Card;
