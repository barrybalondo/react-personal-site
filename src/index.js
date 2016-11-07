import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import '../style/index.css';

import Posts from './containers/posts_index';
import About from './components/about';
import Projects from './containers/projects';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>  
      <IndexRoute component={Posts} />
        
        <Route path="about" component={About}/>
        <Route path="projects" component={Projects}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
