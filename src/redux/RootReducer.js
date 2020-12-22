import { combineReducers } from "redux"
import ComplainReducer from "./reducers/ComplainReducer"

const rootReducer = combineReducers({
    complains: ComplainReducer
})

export default rootReducer