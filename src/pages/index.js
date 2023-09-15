import { useState, useEffect } from "react";
import axios from "axios";
import OneIssue from "./components/oneIssue";
import useIssueList from "../apis/github-api";
import styled from "styled-components";
import NavBar from "../components/navbar";

const Issue = () => {
  const { issue, setIssue } = useIssueList();
  console.log(issue);

  // Id 순으로 필터링
  const onSortId = () => {
    const sortId = [...issue].sort(function (a, b) {
      return a.number < b.number ? -1 : a.number > b.number ? 1 : 0;
    });
    setIssue(sortId);
  };

  // Update 시간으로 필터링
  const onSortUpdate = () => {
    const sortUpdate = [...issue].sort(function (a, b) {
      return a.updated_at < b.updated_at ? -1 : a.updated_at > b.updated_at ? 1 : 0;
    });
    setIssue(sortUpdate);
  };

  // Comment 갯수로 필터링
  const onSortComment = () => {
    const sortComment = [...issue].sort(function (a, b) {
      return a.comments < b.comments ? -1 : a.comments > b.comments ? 1 : 0;
    });
    setIssue(sortComment);
  };

  return (
    <S.Wrapper>
      <NavBar />
      <div>
        <h2>repository</h2>
        <S.FilterLi>
          Filter
          <span onClick={onSortId}>id</span>
          <span onClick={onSortUpdate}>update</span>
          <span onClick={onSortComment}>comment</span>
        </S.FilterLi>
        {issue.map((item) => (
          <OneIssue item={item} />
        ))}
      </div>
    </S.Wrapper>
  );
};

export default Issue;

const Wrapper = styled.div`
  display: flex;
`;

const FilterLi = styled.div`
  font-weight: bold;
  & > * {
    padding: 10px;
  }
  & > span {
    font-weight: normal;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: gray;
    }
  }
`;

const S = {
  Wrapper,
  FilterLi,
};
