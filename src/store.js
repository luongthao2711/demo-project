import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import bgReducer from "./counter/bgSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    bg: bgReducer,
  },
});
