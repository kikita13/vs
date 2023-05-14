import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postsSliceReducer } from "./slices/postsSlice";

const rootReducer = combineReducers({
  posts: postsSliceReducer
})

export const store = configureStore({
  reducer: rootReducer
})