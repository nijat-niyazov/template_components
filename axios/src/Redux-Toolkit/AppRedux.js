import { Provider } from 'react-redux';
import AppCake from './cakeShop/AppCake';
import { store } from './e-commerce/redux/store';
// import './style.css';

const AppRedux = () => {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <AppCake />
    </Provider>
  );
};

export default AppRedux;
