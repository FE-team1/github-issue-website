import { useSearchParams } from "react-router-dom";
import useDetailList from "../../apis/github-detail-api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// function whattitle(el) {
//   if (el.title === item.title) {
//     return true;
//   }
// }

const DetailIssue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q"));

  const [detailIssue, setDetailIssue] = useDetailList(searchParams.get("q"));
  console.log(detailIssue);

  // console에서 확인시 데이터의 번호는 가져와진다.
  // 가져와지는건 저 데이터의 id 번호 q값을 아이디로 했으니 그런듯한데 문제는 다른 데이터 값도 필요하다.
  // q 값에 기존에 데이터에서 필요한 데이터만 추가해서 가져오는 것은 했는데 detailIssue에 들어가지 않는다.
  // q 값은 일단 배열로써 넘어오는데 이 값을 어떻게 쪼개서 넣어야 할지 모르겠다.
  // 질문 할 필요가 있다.
  return (
    <Wrapper>
      <Title>Title: {detailIssue.title}</Title>
      <Comments>comments: {detailIssue.comments}</Comments>
      <Created_at>created_at:{searchParams.get("q").created_at}</Created_at>
      <Updated_at>updated_at:{detailIssue.updated_at}</Updated_at>
      <Bar></Bar>
      <UserWrapper>
        <UserId>{detailIssue.user?.login}</UserId>
      </UserWrapper>
    </Wrapper>
  );
};
export default DetailIssue;

const Wrapper = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  color: white;
  padding-left: 30px;
  padding-top: 30px;
`;

const Title = styled.p`
  font-size: 40px;
  margin-top: 80px;
`;

const Created_at = styled.div`
  margin-bottom: 10px;
`;

const Updated_at = styled.div`
  margin-bottom: 150px;
`;

const Bar = styled.div`
  width: 90%;
  height: 1px;
  margin: 30px;
  background-color: gray;
`;

const UserWrapper = styled.div`
  display: flex;
  margin-top: 120px;
  padding-bottom: 80px;
`;

const UserId = styled.div`
  margin-right: 30px;
  font-size: 48px;
`;

const Comments = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
`;
