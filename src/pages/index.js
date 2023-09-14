import OneIssue from "./components/oneIssue";
import useIssueList from "../apis/github-api";
import styled from "styled-components";
import NavBar from "../components/navbar";


const Issue = () => {
  const { issue } = useIssueList();
  console.log(issue);

  return (
    <Wrapper>
      <NavBar />
        <h1>Repository</h1>
      <IssueWrapper>
        {issue.map((item) => (
          <OneIssue item={item} />
        ))}
      </IssueWrapper>
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

