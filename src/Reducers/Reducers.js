import {combineReducers} from 'redux'
import AnswerReducer from './AnswerReducer'
import PostReducers from './PostReducer'
const Reducers = combineReducers({
    AR:AnswerReducer,
    PR:PostReducers});
export default Reducers;