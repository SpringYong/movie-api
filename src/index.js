import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  // react application은 한 번에 하나의 component만 redering 할 수 있다.
  // 따라서 모든 것은 application(App.js) 안에 들어가야 한다.
  // application(App.js) 안에서 많은 component를 넣을 수 있다.
  // 이러한 component 안에 더 많은 component를 import 할 수 있다.
);