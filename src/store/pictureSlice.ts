import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Picture from '../models/Picture';
import { RootState } from './store';

interface PictureState {
    value: Picture[];
}

const initialState: PictureState = {
    value: [],
};

const pictureSlice = createSlice({
    name: 'picture',
    initialState,
    reducers: {
        addPicture: (state, action: PayloadAction<Picture>) => {
            state.value.push(action.payload);
        },
        assignFolder: (state, action: PayloadAction<Picture>) => {
            const pic = state.value.find((p) => p.uri === action.payload.uri);
            if (pic) {
                pic.folder = action.payload.folder;
            }
        },
    },
});

export const { addPicture, assignFolder } = pictureSlice.actions;
export const pictureSelector = (state: RootState) => state.picture.value;
export default pictureSlice.reducer;
