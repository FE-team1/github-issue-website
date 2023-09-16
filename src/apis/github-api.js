import { useEffect, useState } from "react";
import axios from "axios";

const useIssueList = () => {
  const [issue, setIssue] = useState([]); // 데이터 저장

  useEffect(() => {
    const issueListApi = async () => {
      const response = await axios.get(`https://api.github.com/repos/facebook/react/issues`, {
        headers: { Authorization: "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" },
      });
      setIssue((prev) => {
        return [...prev, ...response.data];
      });
    };
    issueListApi();
  }, []);

  return { issue, setIssue };
};

export default useIssueList;
