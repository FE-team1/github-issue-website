import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const DetailIssue = ({ issue }) => {
  
  return (
    <S.Wrapper>
      <div>
        <span>#{issue.id}</span>
        <span>{issue.content}</span>
      </div>
      <div>comment</div>
    </S.Wrapper>
  );
};

export default DetailIssue;

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 45px 10px 500px 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const S = {
  Wrapper,
};