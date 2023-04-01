import { Provider } from 'react-redux';
import Home from './Home';
import { store } from './redux/store';
import './style.css';

const AppRedux = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default AppRedux;
