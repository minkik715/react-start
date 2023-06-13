import React, {useContext} from 'react';
import {FamilyContext} from "../context/FamilyContext";

function Son() {
    const data = useContext(FamilyContext);
    return (
            <div>
                {data.allowance}
            </div>

    );
}

export default Son;