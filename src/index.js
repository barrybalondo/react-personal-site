import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import '../style/index.css';

import PostsIndex from './containers/posts_index';
import Post from './containers/post_show';
import About from './components/about';
import Projects from './containers/projects';
import ReadsIndex from './containers/reads_index';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>  
      <IndexRoute component={PostsIndex} />
        <Route path="/post/:id" component={Post}/>
        <Route path="/about" component={About}/>
        <Route path="/reads" component={ReadsIndex}/>
        <Route path="/projects" component={Projects}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
