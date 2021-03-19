import {combineReducers} from 'redux'
import AnswerReducer from './AnswerReducer'
import PostReducer from './PostReducer'
const Reducers = combineReducers({AnswerReducer,PostReducer});
export default Reducers;