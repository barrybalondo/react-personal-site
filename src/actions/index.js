import axios from 'axios';
import { 
  FETCH_PROJECTS, 
  FETCH_POSTS, 
  FETCH_POST, 
  FETCH_READS 
} from './types';


const URL_PROJECTS = 'https://api.github.com/users/barrybalondo/starred';
const URL_PERSONAL_API = 'https://personal-api-barrycodes.herokuapp.com/api/';

export function fetchProjects() {

  const request = axios.get(URL_PROJECTS)

  return {
    type: FETCH_PROJECTS,
    payload: request
  };


}

export function fetchPosts() {
 
  const request = axios.get(`${URL_PERSONAL_API}/posts/`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };


}

export function fetchPost(id) {
  const request = axios.get(`${URL_PERSONAL_API}/posts/${id}`);

   return {
    type: FETCH_POST,
    payload: request
  };

}

export function fetchReads() {
  const request = axios.get(`${URL_PERSONAL_API}/reads/`);

   return {
    type: FETCH_READS,
    payload: request
  };

}