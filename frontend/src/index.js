import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-less/semantic.less";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
