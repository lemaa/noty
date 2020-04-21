import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Header from './components/header/index';
import Home from './containers/Home';
import Note from './containers/Note';
import store from './store';
import './styles/index.css';
            
ReactDOM.render(
    <Provider  store={store}>
        <React.StrictMode>
            <Header title="Notes to self"/>
            <Router>
                <Switch>
                    <Route exact path="/" component = {Home} >
                    </Route>
                    <Route exact path="/new-note" component = {Note}>
                    </Route>
                </Switch>
            </Router>
        </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

 


