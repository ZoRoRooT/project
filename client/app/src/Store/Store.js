import {createStore} from "redux";
import authreducer from "./reducer";
var store = new  createStore(authreducer)
export default store