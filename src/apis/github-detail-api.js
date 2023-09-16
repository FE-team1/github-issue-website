import { useEffect, useState } from "react";
import axios from "axios";

const useDetailList = (id) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const issueDetailApi = async () => {
      const response = await axios.get(`https://api.github.com/repos/facebook/react/issues/${id}`, {
        headers: { Authorization: "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" },
      });
      console.log(response);
      // setDetail((prevIssue) => {
      //   return [...prevIssue, ...response.data];
      // });
    };
    issueDetailApi();
  }, [id]);
  return [detail, setDetail];
};

export default useDetailList;
