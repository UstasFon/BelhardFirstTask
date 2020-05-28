export function serverData(state = [], action) {
    switch (action.type) {
        case "SERVER_FETCH_DATA_SUCCESS":
            return action.data;
        default:
            return state
    }
}