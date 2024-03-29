import { ThemeContextProvider } from 'context/ThemeContext';
import 'normalize.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './i18n'; // * import i18n (needs to be bundled
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
