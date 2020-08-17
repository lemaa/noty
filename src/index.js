import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './containers/Home';
import Timer from './containers/Timer';
 import store from './store';
import {Global} from './styles/';
            
ReactDOM.render(
    <Provider  store={store}>
        <React.StrictMode>
            <Global/>
            <Header title="NOtes"/>
            <Router>
                <Switch>
                    <Route exact path="/" component = {Home} >
                    </Route>
                    <Route exact path="/timer" component = {Timer}>
                    </Route>                 
                </Switch>
            </Router>
            <Footer>
                <p>some footer</p>
            </Footer>
        </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

 


