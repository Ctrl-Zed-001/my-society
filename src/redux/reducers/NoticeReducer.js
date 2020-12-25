const initState = []

const NoticeReducer = (state = initState, action) => {
    switch (action.type) {
        case "ALLNOTICES":
            return [
                ...action.payload
            ]
        case "NEWNOTICE":
            return [
                ...state,
                action.payload
            ]
        case "DELETENOTICE":
            const newNotices = [...state]
            newNotices.splice(action.payload, 1)
            return [...newNotices]
        default:
            return state
    }
}

export default NoticeReducer