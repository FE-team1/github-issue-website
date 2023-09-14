import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    issues:[
        {
            id:1,
            title:'example1',
            content:'example1',
            state: false,
        },
        {
            id:2,
            title:'example2',
            content:'example2',
            state: false,
        },
    ],
}

export const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        getIssue(state, action) {
            // state 목록 그대로 보여줌
            console.log(action)
            return state;
        }
    }
});

// issueSlice의 actions에 { getIssue }가 있다
export const { getIssue } = issueSlice.actions; // dispatch(getTodo({ ...action }))
// reducer를 통해 생성된 action exports
// index.js로 이동ㅇ