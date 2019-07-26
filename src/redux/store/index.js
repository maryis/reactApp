import {applyMiddleware, createStore} from "redux";
import {root_reducer} from "../reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


export const store=createStore(root_reducer,composeWithDevTools(applyMiddleware(thunk)));