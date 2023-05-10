import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { postsReducer } from './slices/postSlice'
import { groupReducer } from './slices/groupSlice'
import { userReducer } from './slices/userSlice'
import { groupsReducer } from './slices/groupsSlice'
import { commentsReducer } from './slices/commentsSlice'


const rootReducer = combineReducers({
    posts: postsReducer,
    group: groupReducer,
    groups: groupsReducer,
    user: userReducer,
    comments: commentsReducer,
})

export const store = configureStore({
    reducer: rootReducer
})