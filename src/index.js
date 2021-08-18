import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";


const routing = (
  <React.StrictMode>
  <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
      <Footer />
  </HashRouter>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
