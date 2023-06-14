import React, {useMemo, useState} from 'react';

function HeavyComponent(props) {

    const [count, setCount] = useState(0);

    const heaveWork = () =>{
        for (let i =0; i<=1000000000; i++){}
        return 100;
    }

    const value = useMemo(() => heaveWork(), []);

    return (
        <div>
            <p>나는 엄청 무거운 컴포넌트야</p>
            <button onClick={() => setCount(count+1)}>누르면 카운트가 올라가요.</button>
            {count}
        </div>
    );
}

export default HeavyComponent;