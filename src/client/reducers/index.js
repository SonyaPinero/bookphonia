import { combineReducers } from 'redux';
import BpReducer from './reducer_bp';

const rootReducer = combineReducers({
  music: BpReducer
})

export default rootReducer;
