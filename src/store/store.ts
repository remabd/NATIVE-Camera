import { configureStore } from "@reduxjs/toolkit";
import pictureReducer from './pictureSlice'
import folderReducer from './folderSlice'

export const store = configureStore({
    reducer: {
        picture: pictureReducer,
        folder: folderReducer,
    }
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
