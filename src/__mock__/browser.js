import { setupWorker } from "msw";
import * as issueApi from "./apis/issue/issue.api";
// {getIssues}와 같은것

// issueApi가 가진 모든 values를 복사하여 배열의 요소로 지정하여, api를 등록한 과정
const handler = [...Object.values(issueApi)];

export const worker = setupWorker(...handler);
// 등록된 api를 msw에 셋업
