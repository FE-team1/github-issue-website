## ➡️ 프로젝트 소개

깃허브 오픈 API를 활용하여 특정 레퍼지토리의 이슈를 조회할 수 있는 웹 사이트를 만들

## ➡️ 프로젝트 개요



## ➡️ 진행 팀원 소개

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="">🥰 김가영</a></td>
    <td><a href="">❄️ 권희식</a></td>
    <td><a href="">🦊 장상준</a></td>
  </tr>
</table>

## ➡️ 역할 분담

레이아웃 디자인 / 가영 </br>
api 가져오기 / 상준, 희식 </br>
axios로 토큰가져오기 / 가영, 희식 </br>
페이지네이션 / 가영 </br>
필터기능 / 희식 </br>
로딩페이지 / 상준, 희식 </br>
네브바 / 가영 </br>
메인페이지 / 희식 </br>
디테일페이지 / 상준, 희식 </br>

## ➡️ 문서화 - 상세 작업 과정

📋 스프린트



📅 데일리 스크럼

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="">🥰 김가영</a></td>
    <td><a href="">❄️ 권희식</a></td>
    <td><a href="">🦊 장상준</a></td>
  </tr>
</table>

## ➡️ 폴더 구조

```
├─apis
│  └─github-api.js
│  └─github-detail-api.js
├─components
│  └─navbar.js
├─pages
│    └─components
│      └─detail-Issue.js
│      └─oneIssue.js
│      └─spinner.js
│      └─pagination.js
│    └─index.js
├─route
│  └─router.js
```

## ➡️ 사용 라이브러리

초기셋팅
-eslint
-husky
-styled-components

사용 라이브러리
- husky, prettier, eslint
- axios
- react-router-dom
- styled-components
- spinner

## ➡️ 진행과정

### 9/12

-  간단한 와이어 프레임 회의
husky, prettier, eslint 생성
Main UI, axios 생성 

### 9/13

-   네브바 구현 완

### 9/14

-   페이지네이션 구현 중
-   디테일 페이지, api 수리중

### 9/15

-   페이지네이션 완료

### 9/16

-   디테일 페이지 구현 완료
-   스피너 구현 완료


#### 아쉬운 점

- 가영
- 
- 희식
- 
- 상준
-   1. api 데이터 호출과 호출한 데이터를 다시 내보내는 것
    2. 화면 구조 잡기 - 내가 부족하다는 것을 확 깨달은 곳인데 제일 기초적인 화면 구조를 잡는 걸 못해서 시간이 오래 걸렸다는게 스스로 반성해야 겠다고 생각하고 다시 한 번 복습공부를 해야겠다고 정신 차린 곳
    3. 구글링 - 구글링을 하면 많은 데이터가 있다. 이 데이터 중에서 데이터를 가져와서 프로젝트에 맞춰서 적용을 하는게 어려웠다는 점에서 아직 코드자체를 이해하는 능력이 많이 부족하다고 생각했다.
    4. 이외에도 자잘하게 많았지만 전반적인 코딩 실력이 부족하다고 생각해서 이걸 끌어올리는데 집중하겠습니다.

#### 개선할 점

-   초반에 깃 관련한 숙련도가 부족했다보니까 깃을 이용한 시작이 아니라 각자가 다른 파일에서 시작해서 나중에 합치는 방식으로 프로젝트를 진행했지만 결과적으로 깃허브에서 merge를 하면서 많은 오류를 겪었습니다. 다음 프로젝트는 시작부터 깃을 이용해서 저장소를 맞춘 후 폴더 구조를 다같이 기본적으로 맞춘 후 진행하는 것
-   rtk와 반응형 화면 구조를 적용 못 했었기에 다음 프로젝트에서는 어느정도 적용을 하고 시작할 수 있게 하는 것
