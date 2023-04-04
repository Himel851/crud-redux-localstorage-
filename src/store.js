import { createStore } from "redux";
import { contactReducer } from "./redux/reducers/ContactReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactReducer, composeWithDevTools());




export default store;
