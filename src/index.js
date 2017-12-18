import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Boxcon from './container/box-container.js';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";



let store = createStore(reducers,applyMiddleware(thunk));

class App extends React.Component
{
    render()
    {
        return(
            <div className="root">
                            <Boxcon />
            </div>
        );
    }
}

ReactDOM.render( <Provider store = {store}> <App /> </Provider> , document.getElementById('root'));
registerServiceWorker();
