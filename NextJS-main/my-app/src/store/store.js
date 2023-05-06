import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsSlice, { postsReducer } from './slices/postSlice'


const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = configureStore({
    reducer: rootReducer
})