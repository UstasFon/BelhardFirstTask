import { combineReducers } from "redux";
import { serverData } from 'client/reducers/serverData';

const rootReduser = combineReducers({
    data: serverData
});

export default rootReduser;