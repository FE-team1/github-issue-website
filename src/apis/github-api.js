import { useEffect, useState } from 'react';
import axios from 'axios';

// *** index.js에서 쓰였던 state page
// 이름바꾸기 우클릭 F2
const useIssueList = page => {
	const [issue, setIssue] = useState([]); // 데이터 저장
	// issue는 한 번만 불려와도됨
	// subView는 전체 중에서 일부 (10개씩)
	const [subView, setSubView] = useState([]);

	const issueListApi = async () => {
		const response = await axios.get(
			`https://api.github.com/repos/facebook/react/issues`,
			{
				headers: { Authorization: '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' },
			},
		);
		setIssue(prev => {
			return [...prev, ...response.data];
		});
	};

	useEffect(() => {
		// page가 바뀔때마다 이슈데이터 슬라이스 해서 세팅! 0*10 X
		// subView가 바껴지면서 index.js에 바뀐형태로 나타나게됨
		// 열개만 표시되게..ㅜ
		setSubView(issue.slice(page, (page + 1) * 10));
	}, [page]);
	return [subView, issueListApi];
};

export default useIssueList;
