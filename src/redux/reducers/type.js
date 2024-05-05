import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    types: [],
};

// Define the slice
const typeSlice = createSlice({
    name: "types",
    initialState,
    reducers: {
        setTypes: (state, action) => {
            state.types = action.payload;
        },
    },
});

// export the setter funtion
export const { setTypes } = typeSlice.actions;

// export the reducer
export default typeSlice.reducer;
