import {useEffect, useState} from 'react';
import MainContent from "../MainContent";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const WorkoutSelectPage = () => {
    const navigate = useNavigate();
    const [selection, setSelection] = useState("push");

    const saveSelection = (e:any) => {
        setSelection(e.target.value);
        navigate("/workoutduration");
    };
    useEffect(() => {
        sessionStorage.setItem("selection", selection);
    }, [selection]);
    return (
        <>
            {/*<NavBar/>*/}
            <MainContent content="What types of workouts would you like?" />

            <div className="d-flex justify-content-center mt-3">
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2" value="push">Push</Button>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2" value="pull">Pull</Button>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2" value="legs">Legs</Button>
            </div>
        </>
    );
};

export default WorkoutSelectPage;
