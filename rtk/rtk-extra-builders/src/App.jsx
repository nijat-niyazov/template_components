import { Provider } from 'react-redux';
import Home from './e-commerce/Home';

import { store } from './e-commerce/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
