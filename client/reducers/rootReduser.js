import { combineReducers } from "redux";
import { serverData } from 'client/reducers/serverData';

const rootReduser = combineReducers({
    serverArr
});

export default rootReduser;