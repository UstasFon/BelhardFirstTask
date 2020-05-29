export function serverArr(state = [], action) {
    switch (action.type) {
        case "SERVER_FETCH_DATA_SUCCESS":
            return action.serverArr;
        default:
            return state
    }
}