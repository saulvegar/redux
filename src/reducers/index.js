import { combineReducers } from 'redux';
import ordenes from './ordenes';
import usuarios from './usuarios';

const reducer = combineReducers({
  ordenes,
  usuarios
});

export default reducer;