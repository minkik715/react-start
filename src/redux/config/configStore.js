import {createStore, combineReducers} from "redux"
import counter from "../modules/counter";
import counter2 from "../modules/counter2";

const rootReducer = combineReducers({
    counter,
    counter2
});
const store = createStore(rootReducer);

export default store;