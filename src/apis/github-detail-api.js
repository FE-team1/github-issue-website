import { useEffect, useState } from "react";
import axios from "axios";

const useDetailList = (number) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const issueDetailApi = async () => {
      const response = await axios.get(
        `https://api.github.com/repos/facebook/react/issues/${number}`,
        {
          headers: {
            Authorization: "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",
          },
        }
      );
      console.log(response);
      // setDetail((prevIssue) => {
      //   return [...prevIssue, ...response.data];
      // });
    };
    issueDetailApi();
  }, [number]);
  return [detail, setDetail];
};

export default useDetailList;
