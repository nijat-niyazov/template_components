import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './redux/store';
import { fetchingUsers } from './redux/slice/usersSlice';

store.dispatch(fetchingUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
