import { useSearchParams } from "react-router-dom";
import useDetailList from "../../apis/github-detail-api";

const DetailIssue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q"));

  const [detailIssue, setDetailIssue] = useDetailList(searchParams.get("q"));

  console.log(detailIssue);

  return <div>이슈 상세</div>;
};

export default DetailIssue;
