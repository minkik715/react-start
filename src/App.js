import React from 'react';
import HeavyComponent from "./component/HeavyComponent";

function App(props) {

    return (
        <>
        <nav style={{
            backgroundColor: "yellow",
            marginBottom: "10px"
        }}>
            내비게이션 바
        </nav>
            <HeavyComponent>

            </HeavyComponent>

        <footer style={{
            backgroundColor: "green",
            marginBottom: "10px"
        }}>
            푸터 영역이에요
        </footer>
        </>
    );
}

export default App;