import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MINUS_ONE, minusN, minusOne, PLUS_ONE, plusN, plusOne} from "./redux/modules/counter";

function App(props) {

    const counter = useSelector((state) => {
        return state.counter;
    });
    const counter2 = useSelector((state) => {
        return state.counter2;
    });

    const dispatch = useDispatch()
    let payload = 0;
    return (
        <>
         <div>
             현재 카운트: {counter.number}
             현재 카운트: {counter2.number}
         </div>
            <input type="number" onChange={ (e) =>
            {payload = e.target.value}} />
            <button onClick={ () => {
                dispatch(plusN(payload));
            }}>+</button>
            <button onClick={ () => {
                dispatch(minusN(payload))
            }}>-</button>
        </>


    );
}

export default App;