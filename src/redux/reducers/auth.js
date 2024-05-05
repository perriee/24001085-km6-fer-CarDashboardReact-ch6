import { createSlice } from "@reduxjs/toolkit";

// define initial state
const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
};

// define the slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }

            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// export setter functions
export const { setToken, setUser } = authSlice.actions;

// export the reducer
export default authSlice.reducer;
