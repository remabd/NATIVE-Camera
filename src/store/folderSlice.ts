import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Folder from "../models/Folder";

interface FolderState {
    value: Folder[]
}

const initialState: FolderState = {
    value: [],
}

const folderSlice = createSlice({
    name: "folder",
    initialState,
    reducers: {
        addFolder: (state, action: PayloadAction<Folder>) => {
            if (!state.value.some(o => o.name === action.payload.name)) {
                state.value.push(action.payload)
            }
        },
    }
})

export const { addFolder } = folderSlice.actions;
export const folderSelector = (state: RootState) => state.folder.value;
export default folderSlice.reducer;
