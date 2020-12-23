const initState = [];

const ComplainReducer = (state = initState, action) => {
    switch (action.type) {
        case "GETALLCOMPLAINS":
            return [
                ...action.payload
            ]
        case "NEWCOMPLAIN":
            return [
                ...state,
                action.payload
            ]
        case "RESOLVE":
            let allComplains = [...state]

            let index = allComplains.findIndex(c => c._id === action.payload._id)
            allComplains[index] = action.payload
            return [...allComplains];
        case "DELETE":
            let allC = [...state]
            let rmindex = allC.findIndex(c => c._id = action.payload._id)
            allC.splice(rmindex, 1)
            return [...allC]
        default:
            return state
    }
}

export default ComplainReducer