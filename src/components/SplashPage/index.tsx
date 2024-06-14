import React from 'react';
import MainContent from "../MainContent";
import NavBar from "../NavBar";
import {useNavigate} from "react-router-dom";

import {Button, Container} from "react-bootstrap";
const SplashPage = () => {
    const navigate = useNavigate();

    return (<>
        {/*<NavBar/>*/}
        <MainContent content="Hi, Welcome to FitMix"/>
        <Button onClick={()=>navigate("/workoutselect")}  style={{ backgroundColor: '#FFA629' }} className="mt-3">Build Workout</Button>

    </>)
}

export default SplashPage;