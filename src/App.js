import React, {useEffect, useRef, useState} from 'react';
import GrandFather from "./component/GrandFather";

function App(props) {

    const idRef = useRef("");
    const pwRef = useRef("");
    const [id, setId] = useState("");

    useEffect(() => {
        console.log(id)
        if(id.length >= 10){
            pwRef.current.focus()
        }
    }, [id]);


    return (
        <div>
            <GrandFather></GrandFather>

            <div>아이디: <input type="text" ref={idRef} value={id} onChange={(event) => setId(event.target.value)}/></div>
            <div>비밀번호: <input type="password" ref={pwRef}/></div>
        </div>
    );
}

export default App;