import { legacy_createStore } from "redux";
import { counterReducer } from "./counter/counterReducer";

export const store = legacy_createStore(counterReducer);
