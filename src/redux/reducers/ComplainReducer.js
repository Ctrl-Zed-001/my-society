const initState = [];

const ComplainReducer = (state = initState, action) => {
    switch (action.type) {
        case "GETALLCOMPLAINS":
            return [
                ...action.payload
            ]
        default:
            return state
    }
}

export default ComplainReducer