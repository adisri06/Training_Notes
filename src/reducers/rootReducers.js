import { combineReducers } from "redux";
import CounterReducer from "./reducers";
import RegisterationReducer from "./registeration_reducers";
const rootReducer = combineReducers({
    counter: CounterReducer,
    registeration: RegisterationReducer
})
export default rootReducer;