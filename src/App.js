import React, {useState} from 'react';
import "App.css"
import Button from "./component/Button";
import User from "./component/User";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const onClickRemoveHandler = (id) => {
        setUsers(users.filter((u) => {
            return u.id !== id
        }))
    }

    const onClickRegisterHandler = () => {
        setUsers([...users, {"name": name, "age": age, "id": users.length + 1}])
        setAge(0)
        setName("")
    }

    return (<div>
            <div>
                이름 : <input value={name} onChange={event => {
                setName(event.target.value)
            }}/>
                <br/>
                나이: <input value={age} onChange={event => {
                setAge(event.target.value)
            }}
            />
                <Button onClickRegisterHandler={onClickRegisterHandler}>추간</Button>
            </div>
            <div className="fruits-style">
                {users.map((user) => {
                    return <User user={user} removeFunction={onClickRemoveHandler}/>
                })}
            </div>
        </div>

    );
}



export default App;