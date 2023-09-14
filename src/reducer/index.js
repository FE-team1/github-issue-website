import { combineReducers } from "@reduxjs/toolkit";
import { issueSlice } from "./issue";

export const rootReducer = combineReducers({ issue: issueSlice.reducer });
// store로 이동