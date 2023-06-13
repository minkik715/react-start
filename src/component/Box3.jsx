import React from 'react';

function Box3(props) {

    const boxStyle = {
        border : "2px blue solid",
        margin: "10px",
        padding: "10px"
    }
    console.log("Box3 리렌더링")

    return (
        <div style={boxStyle}>Box3</div>
    );
}

export default React.memo(Box3);