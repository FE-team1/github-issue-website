import { rest } from 'msw';

// ctx = context 콜백함수 생성
export const getIssues = rest.get("/api/issue", (req,res,ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
            {
                id:1,
                title: "ex-issue",
                content: "example",
                state: false,
            },
            {
                id:2,
                title: "ex-issue2",
                content: "example2",
                state: false,
            }],
        )
    )
})