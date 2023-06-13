import React from 'react';
import {FamilyContext} from "../context/FamilyContext";
import Mother from "./Mother";

//손자에게 며느리를 거치지 않고 용돈을 줄거에요
function GrandFather(props) {
    const allowance = 100000;
    const secret = true;
    return (
        <FamilyContext.Provider value={{
            allowance,
            secret
        }}>
            <Mother></Mother>
        </FamilyContext.Provider>
    );
}

export default GrandFather;