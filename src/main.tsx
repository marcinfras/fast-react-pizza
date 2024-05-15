// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Provider } from 'react-redux';
// import { store } from './store.ts';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

//TSX Version
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
