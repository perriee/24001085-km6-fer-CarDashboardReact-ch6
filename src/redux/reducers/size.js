import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    sizes: [],
};

// Define the slice
const sizeSlice = createSlice({
    name: "sizes",
    initialState,
    reducers: {
        setSizes: (state, action) => {
            state.sizes = action.payload;
        },
    },
});

// export the setter funtion
export const { setSizes } = sizeSlice.actions;

// export the reducer
export default sizeSlice.reducer;
