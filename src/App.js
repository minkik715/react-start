import React, {useState} from 'react';
import "App.css"

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    return (
        <div>
            <div>
                이름 : <input value={name} onChange={
                event => {
                    setName(event.target.value)
                }
            }/>
                <br/>
                나이: <input value={age} onChange={
                event => {
                    setAge(event.target.value)
                }
            }
            />
                <button onClick={() => {
                    setUsers([...users, {"name": name, "age": age, "id": users.length + 1}])
                    setAge(0)
                    setName("")
                }}>등록
                </button>
            </div>
            <div className="fruits-style">
                {users.map((user) => {
                    return <div key={user.id} className="fruit-border">
                        {user.name}-{user.age}-{user.id}
                        <button onClick={ () => {
                            setUsers(users.filter((u) => {
                                return u.id !== user.id
                            }))
                        }
                        }>삭제
                        </button>
                    </div>
                })}
            </div>
        </div>

    );
}

export default App;