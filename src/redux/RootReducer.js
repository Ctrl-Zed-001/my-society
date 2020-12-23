import { combineReducers } from "redux"
import ComplainReducer from "./reducers/ComplainReducer"
import MeetingReducer from "./reducers/MeetingReducer"

const rootReducer = combineReducers({
    complains: ComplainReducer,
    meetings: MeetingReducer
})

export default rootReducer