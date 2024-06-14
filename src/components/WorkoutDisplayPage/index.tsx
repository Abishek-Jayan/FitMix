import React from 'react';
import MainContent from "../MainContent";
import DisplayWorkout from "./DisplayWorkout";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
const WorkoutDisplayPage = () => {
    const navigate = useNavigate();
    return (<>
        {/*<NavBar/>*/}
        <Button onClick = {()=>navigate("/")} variant="warning" className="position-absolute top-0 start-0">Back to Home</Button>
        <MainContent content ="Done! Here's your workout for the day" />
        <DisplayWorkout />
    </>)
}

export default WorkoutDisplayPage;