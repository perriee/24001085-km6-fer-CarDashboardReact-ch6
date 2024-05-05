import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    transmissions: [],
};

// Define the slice
const transmissionSlice = createSlice({
    name: "transmissions",
    initialState,
    reducers: {
        setTransmissions: (state, action) => {
            state.transmissions = action.payload;
        },
    },
});

// export the setter funtion
export const { setTransmissions } = transmissionSlice.actions;

// export the reducer
export default transmissionSlice.reducer;
