export function serverObj(state = {}, action) {
    switch (action.type) {
        case "SERVER_FETCH_DATA_SUCCESS":
            return action.serverObj;
        default:
            return state
    }
}