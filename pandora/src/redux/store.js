import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import ClientReducer from './reducers/clientReducer.js';
import ProductReducer from './reducers/productReducer.js';
import ShoppingCartReducer from './reducers/shoppingCartReducer.js';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  client: ClientReducer,
  product: ProductReducer,
  shoppingCart: ShoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, /* logger */));

export default store;