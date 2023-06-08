import React from 'react';
import styled from "styled-components";
import TestPage from "./component/TestPage";
import GlobalStyle from "./GlobalStyle";
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
  background-color: ${(props) => props.backGrooundColor} ;
`
const StContainer = styled.div`
display: flex`

const StP = styled.p`
  color: blue;
`

const boxColors = ['red', 'blue', 'green']

const getBoxName = (color) => {
    switch (color) {
        case "red":
            return "빨강방스"
        case "blue":
            return "파랑박스"
        case "green":
            return "초록박스"
    }
}


function App(p) {
    return (
        <div>
            <GlobalStyle/>
            <TestPage title={"바보"} content={"멍청이"}/>
        </div>
    );
}

export default App;