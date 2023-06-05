import React, {useState} from 'react';
import "App.css"
function App() {

    const [fruits, setFruits] = useState(["감자", "고구마", '오이', '가지', "옥수수"]);
    return (
        <div className="fruits-style">
            {
                fruits.map(fruit => {
                    return <div className="fruit-border">
                        {fruit}
                    </div>
                })
            }
        </div>

    );
}

export default App;