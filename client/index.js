import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers/reducer'

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger))

document,addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
