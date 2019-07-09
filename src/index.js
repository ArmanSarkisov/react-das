import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';


ReactDOM.render(
    // <Router>
    //     <Switch>
    //         <Route exact component={App} path="/" />
    //         {/* <Route component={Contact} path="/contact" />
    //         <Route component={About} path="/about" /> */}
    //         <Redirect from="*" to="/" />
    //     </Switch>
    // </Router>
    <App />,
    document.getElementById("root")
);

// serviceWorker.unregister();
// react domi hamar nkari app componente eti renderi hamara u iran nkari root divi mej

// HOC High order component 