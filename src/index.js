import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import App from './components/app';
import ErrorBoundry from './components/error-boundry'
import BookStoreService from './services/book-store-service'
import { BookStoreServiceContextProvider } from './components/book-store-service-context'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
const bookStoreService = new BookStoreService()

root.render(
  <Provider store={store}>
    <ErrorBoundry> 
      <BookStoreServiceContextProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceContextProvider>
    </ErrorBoundry>
  </Provider>
);