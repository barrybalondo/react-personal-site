import { FETCH_PROJECTS } from '../actions/types';

export default function( state = null, action ) {

  switch (action.type) {

  case FETCH_PROJECTS:
    return action.payload.data; 

  default:
    return state;   
  }

}

