import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  posts: PostsReducer
});

export default rootReducer;