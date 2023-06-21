import React from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

function Home(props) {
    const navigate =  useNavigate()
    const location = useLocation()
    const param = useParams()

    return (
        <>
            <div>Home</div>
            <button onClick={() => navigate("/works")}>
                works로 드가자
            </button>
            <Link to="/contact">contact로 드가자</Link>
        </>
    );
}

export default Home;