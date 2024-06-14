import React from 'react';
import MainContent from "../MainContent";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const WorkoutSelectPage = () => {
    const navigate = useNavigate();

    const saveSelection = () => {
        navigate("/workoutduration");
    };

    return (
        <>
            {/*<NavBar/>*/}
            <MainContent content="What types of workouts would you like?" />

            <div className="d-flex justify-content-center mt-3">
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2">Push</Button>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2">Pull</Button>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2">Legs</Button>
            </div>
        </>
    );
};

export default WorkoutSelectPage;
