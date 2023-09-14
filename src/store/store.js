import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development', // 사용자는 개발자도구를 볼 필요 없다  
})
