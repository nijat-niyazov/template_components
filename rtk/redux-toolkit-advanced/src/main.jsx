import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { fetchingPosts } from './redux/slice/postsSlice';
import { fetchingUsers } from './redux/slice/usersSlice';
import { store } from './redux/store';

store.dispatch(fetchingUsers());
store.dispatch(fetchingPosts());
// for on web refresh getting data

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
