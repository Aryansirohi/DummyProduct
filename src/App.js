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

// Limitations:
// 1. No proper pagination UI. The data is fetched in batches but infinite scroll relies on the user's scroll behavior.
// 2. No feedback is given when no more products are available to load.
// 3. Search results do not work well with pagination. It resets the fetched products when a search is performed.
// 4. Products already loaded are not refreshed if the user selects a new category without a page reload.
