import React from "react";

const User = ({user, removeFunction}) => {
    return (<div key={user.id} className="fruit-border">
        {user.name}-{user.age}-{user.id}
        <button onClick={() => removeFunction(user.id)}>삭제
        </button>
    </div>);
}

export default User