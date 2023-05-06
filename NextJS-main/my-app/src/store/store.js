import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { postsReducer } from './slices/postSlice'
import { groupReducer } from './slices/groupSlice'


const rootReducer = combineReducers({
    posts: postsReducer,
    group: groupReducer
})

export const store = configureStore({
    reducer: rootReducer
})