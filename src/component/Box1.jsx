import React from 'react';

function Box1({initFunc}) {

    const boxStyle = {
        border: "2px red solid",
        margin: "10px",
        padding: "10px"
    }
    console.log("Box1 리렌더링")
    return (
    <div style={boxStyle}>
        <button onClick={initFunc}>초기화</button>
    </div>
)
    ;
}

export default React.memo(Box1);