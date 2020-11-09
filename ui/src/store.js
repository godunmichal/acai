import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  serverDetailsReducer,
  serverListReducer,
  serverOffUpdateReducer,
  serverOnUpdateReducer,
  serverRebootUpdateReducer,
} from "./reducers/serverReducers";

const initialState = {
  servers: [],
};

const reducer = combineReducers({
  serverList: serverListReducer,
  serverDetails: serverDetailsReducer,
  serverOnUpdate: serverOnUpdateReducer,
  serverOffUpdate: serverOffUpdateReducer,
  serverRebootUpdate: serverRebootUpdateReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
