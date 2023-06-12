import React from 'react';

//useEffect: 렌더링 될때, 특정한 작업을 수행해야 할 때 설정하는 훅 (컴포넌트가 화면에 보여졌을떄, 사라졌을 때 )
//의존 배열 -> 해당 배열에 의존할 스테이트를 넣어주면 해당 스테이트가 변할때만 수행됨
//clean up -> retrun () => {}

//useRef -> dom에 직접 접근할때 dom의 값을 저장하여 변수로 사용할 때 사용한다.
// unmount 될 때까지 계속 살아남음
// 저장 공간 -> ref 변화가 일어나도 렌더링 되지 않음
// -> stat는 리렌더링이 꼭 필요한 값을 다룰 때 쓰면 되고
// -> ref는 렌더링을 발생시키지 않는 값을 저장할 때 사용한다.

function App(props) {
    return (
        <div></div>
    );
}

export default App;