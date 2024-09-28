import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <CategoryList />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
