import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

const router = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));
registerServiceWorker();
