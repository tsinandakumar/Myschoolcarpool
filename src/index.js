import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/containers/App';
import store from './app/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
        <Router>
          {/* <AppContainer> */}
            <App />
          {/* </AppContainer> */}
        </Router>
      </Provider>,
    document.getElementById('root')
  );
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app/containers/App', () => renderApp(App));
}