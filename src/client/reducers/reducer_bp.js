import { GET_MUSIC } from '../actions/index';
const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_MUSIC:
      return action.payload;
    default:
      return state;
  }
}
