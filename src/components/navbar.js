import styled from 'styled-components';

const NavBar = () => {
	// const dispatch = useDispatch();
	// const issue = useSelector(state => state.issue);
	// console.log(issue);

	// useEffect(() => {
	//   dispatch(getIssue({ title:'example' }))
	// }, [])

	return (
		<Wrapper>
			<Header>
				<GithubIcon src="/img/38401.png"></GithubIcon>
				<h3 style={{ paddingTop: '27px' }}>Git Issue.net</h3>
			</Header>
			<Container>
				<h3>Issue</h3>
				<ul>
					{/* 나중에 link나 a태그 넣어서 연결 */}
					<li>get list Issues</li>
				</ul>
			</Container>
		</Wrapper>
	);
};

export default NavBar;

const Wrapper = styled.div``;

const Header = styled.div`
	display: flex;
	font-size: 1.4rem;
`;

const Container = styled.div`
	margin-left: 60px;
`;

const GithubIcon = styled.img`
	width: 80px;
	height: 80px;
	padding-right: 10px;
`;
