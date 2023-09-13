import { useState } from "react";
import OneIssue from "./components/oneIssue";

const Issue = () => {
  const [issues, setIssues] = useState([
    {
      id: Math.floor(Math.random() * 100000),
      content: "에러1",
      comment: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      id: Math.floor(Math.random() * 100000),
      content: "에러2",
      comment: [1, 2, 3, 4, 5],
    },
    {
      id: Math.floor(Math.random() * 100000),
      content: "에러3",
      comment: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ]);

  return issues.map((issue) => <OneIssue issue={issue} />);
};

export default Issue;
