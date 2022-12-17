import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// Route(중급88)
import {Route, Routes} from 'react-router-dom';
// reactProxy (실무109) 
// import component명을 reactProxy를 사용했지만 PascalCase관련 error로 인해 ReactProxy로 변경하여 해결
import ReactProxy from './components/R109_reactProxy';
import Home from './components/Home';
// node 서버 api를 post로 json 데이터 호출하기 (실무111)
import ApiPostJson from './components/R111_ApiPostJson';


class App extends Component {
  render(){
    return (
        <div className="App">
          <h1>Hello App!</h1>
          
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/reactProxy" element={<ReactProxy/>}></Route>
            <Route exact path="/apiPostJson" element={<ApiPostJson/>}></Route>
          </Routes>
        </div>
    )
  }
}



export default App;
