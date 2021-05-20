import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {SuspenseHead} from "./styles/Home.styled";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Suspense fallback={<SuspenseHead>Načítávam dáta z API</SuspenseHead>}>
    <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
                <App />
         </Provider>
      </BrowserRouter>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
