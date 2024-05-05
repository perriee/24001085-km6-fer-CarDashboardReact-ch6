import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    manufactures: [],
    manufactureDetail: [],
    loading: false,
};

// Define the slice
const manufactureSlice = createSlice({
    name: "manufactures",
    initialState,
    reducers: {
        setManufactures: (state, action) => {
            state.manufactures = action.payload;
        },
        setManufactureDetail: (state, action) => {
            state.manufactureDetail = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

// export the setter funtion
export const { setManufactures, setManufactureDetail, setLoading } = manufactureSlice.actions;

// export the reducer
export default manufactureSlice.reducer;
