import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

// if (ENV === 'development') {
// const a11y = require('react-a11y').default;
// a11y(React, ReactDOM, {
//   rules: {
//     'img-uses-alt': 'warn',
//     'redundant-alt': 'warn',
//     'button-role-space': 'warn',
//     'hidden-uses-tabindex': 'warn',
//     'label-uses-for': 'warn',
//     'mouse-events-map-to-key-events': 'warn',
//     'no-access-key': 'warn',
//     'no-hash-ref': 'warn',
//     'no-unsupported-elements-use-aria': 'warn',
//     'onclick-uses-role': 'warn',
//     'onclick-uses-tabindex': 'warn',
//     'tabindex-uses-button': 'warn',
//     'use-onblur-not-onchange': 'warn',
//     'valid-aria-role': 'warn',
//   }
// });
// }

ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();