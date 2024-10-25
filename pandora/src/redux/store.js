import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import ClientReducer from './reducers/ClientReducer';
import ProductReducer from './reducers/ProductReducer';
import ShoppingCartReducer from './reducers/ShoppingCartReducer';

const rootReducer = combineReducers({
  client: ClientReducer,
  product: ProductReducer,
  shoppingCart: ShoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;