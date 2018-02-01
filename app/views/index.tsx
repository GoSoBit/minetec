import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './app'

document.body.classList.add(`${process.platform}`);

ReactDOM.render(
  <App/>,
  document.getElementById('app-container')!
);
