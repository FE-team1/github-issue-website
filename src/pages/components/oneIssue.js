import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const OneIssue = ({ issue }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  let searchQuery = query.get("q");
  const DetailIssue = () => {
    console.log(issue.id);
    console.log("쿼리값은", searchQuery);
    navigate(`/?q=${issue.id}`);
  };
  return (
    <S.Wrapper onClick={DetailIssue}>
      <div>
        <span>#{issue.id}</span>
        <span>{issue.content}</span>
      </div>
      <div>comment</div>
    </S.Wrapper>
  );
};

export default OneIssue;

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 45px 10px 45px 10px;
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