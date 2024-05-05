import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    cars: [],
    carDetail: [],
    loading: false,
};

// Define the slice
const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setCarDetail: (state, action) => {
            state.carDetail = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

// export the setter funtion
export const { setCars, setCarDetail, setLoading } = carSlice.actions;

// export the reducer
export default carSlice.reducer;
