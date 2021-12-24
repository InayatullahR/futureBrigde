import { createStore,combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

export const ConfigStore=()=>{
    const myStore= createStore(combineReducers({movieReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return myStore
}