import {useEffect, useState} from 'react';
import MainContent from "../MainContent";
import { Button } from "react-bootstrap";
import CustomFade from "../CustomFade";

const WorkoutSelectPage = () => {
    const [selection, setSelection] = useState("push");
    const [open,setOpen] = useState(true);

    const saveSelection = (e:any) => {
        setSelection(e.target.value);
        setOpen(prevState => !prevState)
    };
    useEffect(() => {
        sessionStorage.setItem("selection", selection);
    }, [selection]);
    return (
        <>
            <CustomFade open={open} goto="/workoutduration">
                <div>
            <MainContent content="What types of workouts would you like?" />

            <div className="d-flex justify-content-center mt-3">
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2" value="push">Push</Button>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2" value="pull">Pull</Button>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mx-2" value="legs">Legs</Button>
            </div>
                </div>
            </CustomFade>
        </>
    );
};

export default WorkoutSelectPage;
