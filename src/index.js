import React from 'react';
import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';

import routes from './routes'


ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('main')
);
