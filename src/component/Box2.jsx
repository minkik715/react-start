import React from 'react';

function Box2(props) {

    const boxStyle = {
        border : "2px green solid",
        margin: "10px",
        padding: "10px"
    }
    console.log("Box2 리렌더링")

    return (
        <div style={boxStyle}>Box2</div>
    );
}

export default React.memo(Box2);