import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { postsReducer } from './slices/postSlice'
import { groupReducer } from './slices/groupSlice'
import { userReducer } from './slices/userSlice'


const rootReducer = combineReducers({
    posts: postsReducer,
    group: groupReducer,
    user: userReducer
})

export const store = configureStore({
    reducer: rootReducer
})