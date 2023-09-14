import { useEffect, useState } from "react";
import axios from "axios";

const useDetailList = () => {
  useEffect(() => {
    const issueDetailApi = async () => {
      const response = await axios.get(`https://api.github.com/repos/facebook/react/issues/${id}`, {
        headers: { Authorization: "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" },
      });
      setDetail((prevIssue) => {
        return [...prevIssue, ...response.data];
      });
    };
    issueDetailApi();
  }, [id]);
  console.log(detail);
  return { detail };
};

export default useDetailList;
