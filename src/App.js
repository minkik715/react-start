import React, {useCallback, useState} from 'react';
import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import Box3 from "./component/Box3";


//useMemo -> 메모리에 데이터를 캐쉬해서 리렌더링이 될 때 하위 컴포넌트가 변경되지 않았다면 하위 컴포넌트는 리렌더링 시키지 않는다.
function App() {
    const [count, setCount] = useState(0);
    const bodyDivStyle = {
        textAlign : "center"
    }

    const initCount = useCallback( () => {
        console.log(`${count}에서 0으로 초기화`)
        setCount(0)
    }, [count])
    const boxStyle = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }
    return (
        <div style={bodyDivStyle}>
            <div >카운트 예제입니다!</div>
            <div>현재 카운트: {count}</div>
            <div>
                <button onClick={() => setCount(count +1)}>+</button>
                <button onClick={() => setCount(count -1)}>-</button>
            </div>
            <div style={boxStyle}>
                <Box1 initFunc={initCount}></Box1>
                <Box2></Box2>
                <Box3></Box3>
            </div>

        </div>
    );
}

export default App;