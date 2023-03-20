import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages';
import { compose,applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import  'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer,compose(applyMiddleware(thunk)))
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <Index/>
  </Provider>
  </React.StrictMode>
);



