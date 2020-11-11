import {combineReducers} from 'redux'
import Course from './courseReducers'
import Formenq from './courseReducers'
import Userdoubts from './doubtsReducer'

const rootReducer =combineReducers({
    Course,
    Formenq,
    Userdoubts
})

export default rootReducer