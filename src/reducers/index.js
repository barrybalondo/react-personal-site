import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import PostsReducer from './reducer_posts';
import ReadsReducer from './reducer_reads';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  posts: PostsReducer,
  reads: ReadsReducer
});

export default rootReducer;