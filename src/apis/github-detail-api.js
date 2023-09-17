import { useEffect, useState } from "react";
import axios from "axios";

const useDetailList = (id) => {
  const [detail, setDetail] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const issueDetailApi = async () => {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/repos/facebook/react/issues/${id}`, {
        headers: { Authorization: "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" },
      });
      console.log(response);
      setDetail(response.data);
      setLoading(false);
    };
    issueDetailApi();
  }, [id]);
  return { detail, setDetail, loading };
};

export default useDetailList;
