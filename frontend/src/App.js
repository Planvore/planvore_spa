
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ponyApp from "./reducers";

// import PonyNote from "./components/PonyNote";
// import NotFound from "./components/NotFound";

import { Jumbotron, Container } from 'reactstrap';

let store = createStore(ponyApp, applyMiddleware(thunk));
//
// class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <BrowserRouter>
//                     <Switch>
//                         <Route exact path="/" component={PonyNote} />
//                         <Route component={NotFound} />
//                     </Switch>
//                 </BrowserRouter>
//             </Provider>
//         );
//     }
// }

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">React Jumbotron Test Live Reloading</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default hot(module)(Example)
