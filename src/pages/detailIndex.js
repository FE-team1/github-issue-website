import { useState } from "react";
import DetailIssue from "./components/detail_Issue";

const Detail = () => {
  const [issues, setIssues] = useState([
    {
      id: Math.floor(Math.random() * 100000),
      content: "에러1",
      comment: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ]);

  return issues.map((issue) => <DetailIssue issue={issue} />);
};

export default Detail;