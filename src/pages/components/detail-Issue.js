import { useSearchParams } from 'react-router-dom';
import useDetailList from '../../apis/github-detail-api';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const DetailIssue = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get('q'));

	// const detail = useState();

	const [detailIssue, setDetailIssue] = useDetailList(searchParams.get('q'));

	console.log(detailIssue);

	return (
		<Wrapper>
			<Title>Title: {detailIssue.title}</Title>
			<Comments>comments: {detailIssue.comments}</Comments>
			<Created_at>created_at:{detailIssue.created_at}</Created_at>
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
