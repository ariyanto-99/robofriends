import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
//import CardList from './CardList';
//import Card from './Card';
import 'tachyons';
//import { robots } from './robots'
//import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.createRoot(document.getElementById('root')).
    render( <App />
);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//registerServiceWorker();
