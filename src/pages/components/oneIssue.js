import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OneIssue = ({ item }) => {
	const navigate = useNavigate();

	const goToDetail = () => {
		const id = item.number;
		navigate(`/detail?q=${id}`);
	};

	return (
		<S.Wrapper onClick={goToDetail}>
			<S.ErrorHeader>
				<span>#{item.number}</span>
				<span>comments: {item.comments}</span>
			</S.ErrorHeader>
			<div>content: {item.title}</div>
			<p>{item.updated_at}</p>
		</S.Wrapper>
	);
};

export default OneIssue;

const Wrapper = styled.div`
	border: 1px solid black;
	padding: 45px 10px 45px 10px;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
`;

const ErrorHeader = styled.div`
	display: flex;
	flex-direction: column;
`;

const S = {
	Wrapper,
	ErrorHeader,
};
