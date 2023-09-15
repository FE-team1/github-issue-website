import { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({maxPage, pageLimit, setPage, page}) => {
    // 버튼과 현재 페이지를 상태로 설정
    const [btnNum, setBtnNum] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPageArr, setLimitPageArr] = useState([]);

    const createArr = (n) => {
        var iArr = []
        for (let i = 0; i < n; i++) {
            iArr.push(i + 1);
        }
        return iArr;
    };

    const totalPageArr = createArr(Number(maxPage)) // 20
    console.log(`totalPageArr`, totalPageArr)

    // pageLimit 정수로.. 변환
    const page_Limit = Number(pageLimit)

    useEffect(() => {
        const index = btnNum === 0 ? 0 : btnNum - 1;
        setLimitPageArr(totalPageArr.slice(index, page_Limit))
    },[])
    // [] = 맨처음에 한 번 호출된 후 안 쓰임 (최초 실행 1회)

    // btnNum 바뀔 때마다 호출되는 거
    useEffect(()=>{
        // 0이라서 처음에 버튼 안불러와짐 => 삼항연산자로 해결 btnNum - 1
        // setLimitPageArr(totalPageArr.slice(0, page_Limit))
        // 왜 안넘어가..ㅋ....ㅋ.ㅋ..? 바보 setPage안함
        if (page < page_Limit) {
            setLimitPageArr(totalPageArr.slice(0, page_Limit))
        } else if (page >= page_Limit) { 
            setLimitPageArr(totalPageArr.slice(page_Limit, maxPage))
        }
        setPage(btnNum)
    },[btnNum])

    const firstPage = () => {
        setBtnNum(1)
        setCurrentPage(1);
        setPage(1);
    }
    const lastPage = () => {
        // 올림 20/10 - 1
        setBtnNum(maxPage)
        setCurrentPage(maxPage);
        setPage(maxPage);
    }
    const prevPage = () => {
        // 현재 페이지가 1페이지일경우
        if (currentPage <= 1)
            return;
        setBtnNum(n => n - 1);
        setCurrentPage(n => n - 1)
        setPage(n => n - 1)
    }

    const nextPage = () => {
        // 현재 페이지가 20페이지보다 많을경우
        if(currentPage >= maxPage)
        return;
        setBtnNum(n => n + 1);
        setCurrentPage(n =>  n + 1)
        setPage(n => n + 1)
    }

    // 움직였을때 한 번에 바뀌도록
    const onChangedPage = (n) => {
        setBtnNum(n);
        setCurrentPage(n);
    }

    return (
        <Paging>
            {/* << 와 < */}
            <h1>currentPage : {currentPage}</h1>
            <h2>btnNum : {btnNum} </h2>
            <PageBtn onClick={firstPage}>&lt;&lt;</PageBtn>
            <PageBtn onClick={prevPage}>&lt;</PageBtn>
            <>
                {
                    // 답답할 노릇 왜 안뜰까.. 답답하다ㅏㅁ얼 ㅣ;ㅁ
                    // ??됐다 똑같이 했는데? ㅋㅋㅋ??ㅋ??ㅋ??..
                    limitPageArr.map((n) => (
                        // n을 사용할 수 있게 물려준다
                        <PageBtn onClick={() => onChangedPage(n)}>
                            {n}
                        </PageBtn>
                    ))
                }
            </>
            <PageBtn onClick={nextPage}>&gt;</PageBtn>
            <PageBtn onClick={lastPage}>&gt;&gt;</PageBtn>
        </Paging>
    )
}

export default Pagination;

const Paging = styled.div`
    margin-top: 12px;
    text-align: center;
`


const PageBtn = styled.button`
    height: 34px;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
`