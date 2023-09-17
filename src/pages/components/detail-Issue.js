import { useSearchParams } from "react-router-dom";
import useDetailList from "../../apis/github-detail-api";
import styled from "styled-components";
import NavBar from "../../components/navbar";
import ClipLoader from "react-spinners/ClipLoader";

const DetailIssue = () => {
  // useSearchParams()를 사용하여 쿼리값을 가져옴
  const [query, setQuery] = useSearchParams();
  // 쿼리값을 통하여 해당 api를 호출
  let id = query.get("q");
  const { detail, loading } = useDetailList(id);
  console.log(detail);

  // https://www.npmjs.com/package/react-spinners (react-spinner 라이브러리 사용)
  // loading === true 상태이면 loading-spinner을 보여주고 false이면 데이터를 보여줌
  return (
    <>
      {loading ? (
        <SpinnerBox>
          <ClipLoader loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        </SpinnerBox>
      ) : (
        <S.Wrapper>
          <NavBar />
          <div>
            <h2>repository</h2>
            <S.ContentBox>
              <h3># {detail.number}</h3>
              <h4>{detail.title}</h4>
              <div>solution: {detail.body}</div>
              <div>update time: {detail.updated_at}</div>
            </S.ContentBox>
          </div>
        </S.Wrapper>
      )}
    </>
  );
};

export default DetailIssue;

const Wrapper = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  border: 3px solid black;
  margin: 30px;

  & > * {
    padding: 20px;
  }
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const S = {
  Wrapper,
  ContentBox,
};
