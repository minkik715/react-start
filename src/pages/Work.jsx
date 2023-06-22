import React from 'react';
import {useParams} from "react-router-dom";
import {todos} from "../shared/data";

function Work(props) {

    let params = useParams();
    const id = params.id
    const todo = todos.find( (data) => {
        return data.id === parseInt(id)
    })
    console.log(todo)
    return (
        <div>
            {
                id + " "  +todo.todo
            }

        </div>
    );
}

export default Work;