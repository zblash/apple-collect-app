import { createStore } from "redux";
import appReducer from "../reducers/app-reducer";

export const appStore = createStore(appReducer);
