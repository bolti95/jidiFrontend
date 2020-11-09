import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    basketState: basketReducer,
    customerState: customerReducer
});