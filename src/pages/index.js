import { useState, useEffect } from "react";
import axios from "axios";
import OneIssue from "./components/oneIssue";
import useIssueList from "../apis/github-api";
import styled from "styled-components";
import NavBar from "../components/navbar";

const Issue = () => {
  const { issue } = useIssueList();
  console.log(issue);

  return (
    <S.Wrapper>
      <NavBar />
      <div>
        <h2>repository</h2>
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

const S = {
  Wrapper,
};
