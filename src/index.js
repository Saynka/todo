import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Main() {

  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

reportWebVitals();