import React, {useState} from 'react';

function App() {
    const [cnt, setCnt] = useState(0);
    const plusCnt =  () => {setCnt(cnt +1)}
    const minusCnt =  () => {setCnt(cnt -1)}

    return (
        <div>
            {cnt}
            <button onClick={plusCnt}>+</button>
            <button onClick={minusCnt} >-</button>
        </div>
    );
}

export default App;