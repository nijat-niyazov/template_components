import { Provider } from 'react-redux';
import Home from './e-commerce/Home';
import { store } from './e-commerce/redux/store';
import './style.css';

const AppRedux = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default AppRedux;
