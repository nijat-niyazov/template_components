import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './e-commerce/redux/store';
import './index.css';
import Home from './e-commerce/Home';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <Home />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </>
);
