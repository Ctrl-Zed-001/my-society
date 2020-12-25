import { combineReducers } from "redux"
import ComplainReducer from "./reducers/ComplainReducer"
import MeetingReducer from "./reducers/MeetingReducer"
import NoticeReducer from "./reducers/NoticeReducer"

const rootReducer = combineReducers({
    complains: ComplainReducer,
    meetings: MeetingReducer,
    notices: NoticeReducer
})

export default rootReducer