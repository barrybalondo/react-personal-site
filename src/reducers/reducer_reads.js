import { FETCH_READS } from '../actions/types';

export default function( state = null, action ) {

  switch (action.type) {

  case FETCH_READS:
    return action.payload.data; 

  default:
    return state;   
  }

}

