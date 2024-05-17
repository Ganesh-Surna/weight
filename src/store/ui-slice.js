import { createSlice } from "@reduxjs/toolkit";

const initialState = {focusedScreen: "home"};

const uiSlice = createSlice({
    initialState: initialState,
    name: "ui",
    reducers: {
        setFocusedScreen(state, action){
            state.focusedScreen = action.payload;
        },
    }
})

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;