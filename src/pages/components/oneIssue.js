import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OneIssue = ({ item }) => {
  const navigate = useNavigate();
  // const [query, setQuery] = useSearchParams();
  // let searchQuery = query.get("q");
  // const goToDetail = () => {
  //   console.log(issue.id);
  //   console.log("쿼리값은", searchQuery);
  //   navigate(`/?q=${issue.id}`);
  // };
  const [detail, setDetail] = useState([]);
  const id = item.number;

  const goToDetail = () => {
    console.log(id);
  };
  return (
    <S.Wrapper onClick={goToDetail}>
      <S.ErrorHeader>
        <span>#{item.number}</span>
        <span>comments: {item.comments}</span>
      </S.ErrorHeader>
      <div>content: {item.title}</div>
      <p>{item.updated_at}</p>
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

const ErrorHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const S = {
  Wrapper,
  ErrorHeader,
};