# React

Nodejs MVC 패턴의 views를 위한 React

취직전 공부했던 책이지만 다 까먹었고 다시 공부하는 중입니다.
Nodejs MVC 패턴의 view를 위해 공부하고 있습니다. 그래서 실무부분만 읽고 필요하고 중요한거만
책의 앞부분으로 가서 공부중입니다. 향후 vue를 더욱 집중해서 공부할 예정입니다(react보다 쉽기 때문에...)

# 필수 설치

1. npm install yarn --save
2. npm install -g create-react-app --save
3. create-react-app client

# 시작 방법

client 경로
yarn start

# 시작

# (중급88 => REACT/client/src/index.js)

react-router-dom
라우팅이란, 호출되는 url에 따라 페이지 이동을 설정하는 것이다. react에서 view는 component를 사용한다.
react에서 라우팅을 지원하는 패키지는 여러개 있지만 웹 개발을 위한 패키지로 적합한 react-router-dom을 설치한다.
react-router-dom 은 {BrowserRouter, Route, Link}를 지원한다. Route와 Link를 사용하기 위해서는 <BrowserRouter>
태그로 감싸 사용해야 한다.

# (실무106)

create-react-app을 설치하여 front-end 서버, back-end 서버 분리

# (실무109 => REACT/client/package.json)

client(react)폴더에 package.json 파일에 프록시 설정이 필요
"proxy": "http://127.0.0.1:5000"
프록시란? 클라이언트가 다른 서버에 간접적으로 접속할 수 있도록 중계해주는 프로그램

# (실무110 => REACT/client/src/components/R109_reactProxy.js)

기본적인 데이터 전송
React에서 json으로 데이터를 받아 사용하기 위해서는 node 서버에서 json 형태로 데이터를 response에 담아 보내줘야 한다.

# 느낀점

1. 책의 초판 연도가 2021년도 2월 1일이지만 버전의 차이로 그대로 하다보면 에러가 발생한다. (22-12-11)
2. 공부하기 전에 react가 vue에 비해 어렵다고 들었다. vue를 공부하지 않았지만 react 자체가 상당히 어렵다고 생각하게 된다. (22-12-11)
3. 한번 읽었기 때문에 체계적으로 README를 작성할 수 있는거 같다.

[출처]:초보자를 위한 리액트 200제
