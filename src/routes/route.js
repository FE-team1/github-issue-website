import {
    createBrowserRouter,
} from "react-router-dom";
import OneIssue from "../pages/components/oneIssue";

// 메인페이지 구현 후 수정 예정
export const route = createBrowserRouter ([
    {
      path: "/",
      element: <OneIssue />
    },
])

