import axios from 'axios';
import { FETCH_PROJECTS, FETCH_POSTS } from './types';

const URL_PROJECTS = 'https://api.github.com/users/barrybalondo/starred';
const URL_POSTS = 'http://localhost:8080/api/posts';

export function fetchProjects() {

  const request = axios.get(URL_PROJECTS)

  return {
    type: FETCH_PROJECTS,
    payload: request
  };


}

export function fetchPosts() {
 
  const request = axios.get(URL_POSTS);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };


}