import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reStockMarojna } from '../redux/slices/marojnaSlice';

const Marojna = () => {
  const { marojna } = useSelector(store => store.marojna);
  const dispatch = useDispatch();
  const [value, setvalue] = useState(1);

  return (
    <div>
      <h2>Number of marojna - {marojna}</h2>
      <button>Order marojna</button>
      <input
        type="number"
        value={value}
        onChange={() => setvalue(p => p + 1)}
      />
      <button onClick={() => dispatch(reStockMarojna(value))}>
        saya uygun artir marojnani
      </button>
    </div>
  );
};

export default Marojna;
