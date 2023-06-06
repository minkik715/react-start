import React from "react";

const Button = ({onClickRegisterHandler, children ="등록"}) => {
    return (
        <button onClick={onClickRegisterHandler}>{children}
        </button>
    )
}
export default Button;