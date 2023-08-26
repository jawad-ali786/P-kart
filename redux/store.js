import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/rootReducers';

const userInfoFromStorage = localStorage.getItem('pkart_userInfo')
  ? JSON.parse(localStorage.getItem('pkart_userInfo'))
  : null;
const cartItemsFromStorage = localStorage.getItem('pkart_cartItems')
  ? JSON.parse(localStorage.getItem('pkart_cartItems'))
  : [];
const shippingAddressFromStorage = localStorage.getItem(
  'pkart_shippingAddress'
)
  ? JSON.parse(localStorage.getItem('pkart_shippingAddress'))
  : {};
const paymentMethodFromStorage = localStorage.getItem('pkart_paymentMethod')
  ? JSON.parse(localStorage.getItem('pkart_paymentMethod'))
  : '';

const middleware = [thunk];
const initial = {
  userLogin: { user: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
};

export const store = createStore(
  reducers,
  initial,
  composeWithDevTools(applyMiddleware(...middleware))
);
