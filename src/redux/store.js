import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import stateReducer from "../redux/state-reducer";

const reducers = combineReducers({stateReducer});

const  store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;