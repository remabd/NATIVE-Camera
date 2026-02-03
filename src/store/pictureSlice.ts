import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Picture from "../models/Picture";
import { RootState } from "./store";

// Define a type for the slice state
interface CounterState {
    value: Picture[]
}

// Define the initial state using that type
const initialState: CounterState = {
    value: [],
}

const pictureSlice = createSlice({
    name: "picture",
    initialState,
    reducers: {
        addPicture: (state, action: PayloadAction<Picture>) => {
            state.value.push(action.payload)
        },
    }
})

export const { addPicture } = pictureSlice.actions;
export const pictureSelector = (state: RootState) => state.picture.value;
export default pictureSlice.reducer;
