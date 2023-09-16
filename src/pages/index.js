import { useState, useEffect } from "react";
import axios from "axios";
import OneIssue from "./components/oneIssue";
import useIssueList from "../apis/github-api";
import styled from "styled-components";
import NavBar from "../components/navbar";

const Issue = () => {
  const { issue, setIssue } = useIssueList();
  console.log(issue);

  /**
   * 
   @description
   - ddd
   @todo
   -
   @title
   - jsdocs
   */

  /*
  event 객체를 사용해 option의 value값을 받아올 수 있음
  select의 onChange 함수를 사용하여 option의 value가 변경 => 변경된 value값을 기준으로 필터링
  */
  const onChangedFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value === "update") {
      const sortUpdate = [...issue].sort(function (a, b) {
        return a.updated_at < b.updated_at ? -1 : a.updated_at > b.updated_at ? 1 : 0;
      });
      setIssue(sortUpdate);
    } else if (e.target.value === "comment") {
      const sortComment = [...issue].sort(function (a, b) {
        return a.comments < b.comments ? -1 : a.comments > b.comments ? 1 : 0;
      });
      setIssue(sortComment);
    } else if (e.target.value === "id") {
      const sortComment = [...issue].sort(function (a, b) {
        return a.number < b.number ? -1 : a.number > b.number ? 1 : 0;
      });
      setIssue(sortComment);
    }
  };

  return (
    <S.Wrapper>
      <NavBar />
      <div>
        <h2>repository</h2>
        <S.FilterLi>
          Filter
          <S.SelectBox onChange={onChangedFilter}>
            <option selected>---filter---</option>
            <option>id</option>
            <option>update</option>
            <option>comment</option>
          </S.SelectBox>
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

const SelectBox = styled.select`
  margin-left: 10px;
`;

const S = {
  Wrapper,
  FilterLi,
  SelectBox,
};
