//Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

//Redux store
import {store} from "./redux/store";

//Router and start application flow
import App from './App';

//Styles loader
import './assets/StyleLoader';
// import Login from "./pages/Login";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
