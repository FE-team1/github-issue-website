import OneIssue from "./components/oneIssue";
import useIssueList from "../apis/github-api";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Pagination from "./components/pagination";
import { useEffect, useState } from "react";
// https://blog.naver.com/PostView.nhn?blogId=senshig&logNo=222026171254&parentCategoryNo=&categoryNo=85&viewDate=&isShowPopularPosts=false&from=postView
// https://www.daleseo.com/react-pagination/


const Issue = () => {
  // page 전역적으로 관리 page몇 번인지 
  const [page, setPage] = useState(1);
  // issue = subView 
  const [issue, Api] = useIssueList(page);
  console.log(`issue:`, issue);
  // Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환
  // issue를 한페이지당 10개 씩보이도록
  // 맨처음 시작시 Api()호출 하면서 issue 60개정도 싹다불러오기

  useEffect(() => { 
    Api();
  }, [])

  return (
    <Wrapper>
      <NavBar />
        <h1>Repository</h1>
      <IssueWrapper>
        {issue.map((item) => (
          <OneIssue item={item} />
        ))}
      </IssueWrapper>
      {/* 최대 20페이지, 한페이지당 10개씩 */}
      <Pagination maxPage='20' pageLimit = '10' page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default Issue;


const Wrapper = styled.div `
  margin-left: 400px;
  border-left: 1px solid black;
  padding: 10px 0px 10px 30px;
`

const IssueWrapper = styled.div`
  background-color: white;
    display: flex;
    padding-left: 50px;
    max-width: 1100px;
    box-sizing: border-box;
    flex-direction: column;
`;

