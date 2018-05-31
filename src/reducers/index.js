import { combineReducers } from 'redux';
import DataReducer from './datareducer';

export default combineReducers({
  data: DataReducer
});
