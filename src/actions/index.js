import axios from 'axios';
import { FETCH_PROJECTS } from './types';


const GIT_PROJECTS = 'https://api.github.com/users/barrybalondo/repos';

export function fetchProjects() {

  const request = axios.get(GIT_PROJECTS)

  return {
    type: FETCH_PROJECTS,
    payload: request
  };


}