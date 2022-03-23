import Days from './component/weeks';
import Rating from './component/rating';
import styled from "styled-components";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <Wrap className="App">
          <Routes>
            <Route exact path="/"  element={<Days/>}/>
            <Route path="/rating/:getweek" element={<Rating/>}/>
          </Routes>
        </Wrap>
        </BrowserRouter>
    );
}

const Wrap = styled.div `
    width: 500px;
    height: 800PX;
    margin: 50px auto;
    padding: 50PX 0px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 5px;
`;

export default App;
