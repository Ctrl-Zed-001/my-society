const initState = [];

const MeetingReducer = (state = initState, action) => {
    switch (action.type) {
        case "GETALLMEETINGS":
            return [...action.payload];
        case "NEWMEETING":
            return [...state, action.payload]
        case "RESCHEDULE":
            let allMeets = [...state]
            let index = allMeets.findIndex(m => m._id === action.payload._id)
            allMeets[index] = action.payload;
            return [...allMeets]
        case "UPDATE":
            let allM = [...state];
            let i = allM.findIndex(m => m._id === action.payload._id)
            allM[i] = action.payload;
            return [...allM]
        default:
            return state
    }
}

export default MeetingReducer