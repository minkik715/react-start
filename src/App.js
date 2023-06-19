import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function App(props) {

    const counter = useSelector((state) => {
        return state.counter;
    });
    const counter2 = useSelector((state) => {
        return state.counter2;
    });

    const dispatch = useDispatch()
    return (
        <>
         <div>
             현재 카운트: {counter.number}
             현재 카운트: {counter2.number}
         </div>
            <button onClick={ () => {
                dispatch({
                    type :"PLUS"
                })
            }}>+</button>
            <button onClick={ () => {
                dispatch({
                    type : "MINUS"
                })
            }}>-</button>
        </>


    );
}

export default App;