import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { route } from "./routes/route"
import { worker } from "./__mock__/browser";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  // 개발자 환경에서만 실행
  if(process.env.NODE_ENV === 'development') {
    worker.start();
    /**
     * msw -> 내가 만든 가상의 데이터, 개발편의성을 위하여 사용
     * 실제 사용자는 가상의 데이터가 아닌 실제 DB가 전달되어야함
     * production -> 실제 DB와 소통하는 백엔드와 소통
     */
  };

  useEffect(() => {
    // reponse콘솔 찍어보기
    // .then : 비동기 처리가 끝난 다음에 처리할 일을 정의
    // axios가 아니기 때문에 parsing
    // 백엔드 없이 axios 소통한것 처럼 구현
    fetch("/api/issue")
    .then((res) => res.json())
    .then((result) => console.log(result))
  }, [])

  return (
    <>
    {/* npm i react-redux */}
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
    </>
  )
}

export default App;
