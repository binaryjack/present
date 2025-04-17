import { combineReducers } from 'redux';
import authReducer from './modules/auth/reducer';
import pollsReducer from './modules/polls/reducer';
import whatsappReducer from './modules/whatsapp/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  whatsapp: whatsappReducer,
});

export default rootReducer;