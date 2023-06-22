import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {todos} from "../shared/data";

function Works(props) {

    const navigate = useNavigate()
    return (
        <>
            <div>Works</div>
            <div>{
                todos.map((todo) => {
                    return <div key={todo.id}>
                        <button id={todo.id} onClick={ () => navigate(`/work/${todo.id}`)}>{todo.todo}</button>
                        <Link to={`/work/${todo.id}` }>{todo.todo}</Link>
                    </div>
                })
            }
            </div>
        </>
    );
}

export default Works;