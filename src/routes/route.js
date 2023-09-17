import {
    createBrowserRouter,
} from "react-router-dom";
import Issue from "../pages";

// 메인페이지 구현 후 수정 예정
export const route = createBrowserRouter ([
    {
      path: "/",
      element: <Issue />
    },
])

