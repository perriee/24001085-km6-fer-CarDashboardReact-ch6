import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import car from "./car";
import manufacture from "./manufacture";
import type from "./type";
import size from "./size";
import transmission from "./transmission";

// combining reducers
export default combineReducers({
    auth,
    car,
    manufacture,
    type,
    size,
    transmission,
});
