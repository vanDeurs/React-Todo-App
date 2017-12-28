import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

console.log("We are live!")

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
