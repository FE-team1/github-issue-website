import { useState, useEffect } from 'react';
import OneIssue from './components/oneIssue';
import useIssueList from '../apis/github-api';
import styled from 'styled-components';
import NavBar from '../components/navbar';
import Pagination from './components/pagination';

const Issue = () => {
	// page 전역적으로 관리 page몇 번인지
	const [page, setPage] = useState(1);
	// issue = subView
	const [issue, Api, setIssue] = useIssueList(page);
	console.log(`issue:`, issue);
	// Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환
	// issue를 한페이지당 10개 씩보이도록
	// 맨처음 시작시 Api()호출 하면서 issue 60개정도 싹다불러오기

	/**
   * 
   @description
   - ddd
   @todo
   -
   @title
   - jsdocs
   */

	/*
  event 객체를 사용해 option의 value값을 받아올 수 있음
  select의 onChange 함수를 사용하여 option의 value가 변경 => 변경된 value값을 기준으로 필터링
  */
	const onChangedFilter = e => {
		console.log(e.target.value);
		if (e.target.value === 'update') {
			const sortUpdate = [...issue].sort(function (a, b) {
				return a.updated_at < b.updated_at
					? -1
					: a.updated_at > b.updated_at
					? 1
					: 0;
			});
			setIssue(sortUpdate);
		} else if (e.target.value === 'comment') {
			const sortComment = [...issue].sort(function (a, b) {
				return a.comments < b.comments ? -1 : a.comments > b.comments ? 1 : 0;
			});
			setIssue(sortComment);
		} else if (e.target.value === 'id') {
			const sortComment = [...issue].sort(function (a, b) {
				return a.number < b.number ? -1 : a.number > b.number ? 1 : 0;
			});
			setIssue(sortComment);
		}
	};

	useEffect(() => {
		Api();
	}, []);

	return (
		<S.Wrapper>
			<NavBar />
			<div>
				<h2>repository</h2>
				<S.FilterLi>
					Filter
					<S.SelectBox onChange={onChangedFilter}>
						<option selected>---filter---</option>
						<option>id</option>
						<option>update</option>
						<option>comment</option>
					</S.SelectBox>
				</S.FilterLi>
				{issue.map(item => (
					<OneIssue item={item} />
				))}
			</div>
			<Pagination maxPage="20" pageLimit="10" page={page} setPage={setPage} />
		</S.Wrapper>
	);
};
export default Issue;

const FilterLi = styled.div`
	font-weight: bold;
	& > * {
		padding: 10px;
	}
	& > span {
		font-weight: normal;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
			color: gray;
		}
	}
`;

const SelectBox = styled.select`
	margin-left: 10px;
`;

const Wrapper = styled.div`
	margin-left: 400px;
	display: flex;
	border-left: 1px solid black;
	padding: 10px 0px 10px 30px;
`;

const IssueWrapper = styled.div`
	background-color: white;
	display: flex;
	padding-left: 50px;
	max-width: 1100px;
	box-sizing: border-box;
	flex-direction: column;
`;

const S = {
	Wrapper,
	FilterLi,
	SelectBox,
};
