import MainContent from "../MainContent";
import DisplayWorkout from "./DisplayWorkout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import CustomFade from "../CustomFade";
const WorkoutDisplayPage = () => {
    const [open,setOpen] = useState(true);
    return (<>
        <CustomFade open={open} goto="/">
        <div className="d-flex flex-column align-items-center">
        <Button onClick = {()=>setOpen(prevState => !prevState)} variant="warning" className="position-absolute top-0 start-0">Back to Home</Button>
        <MainContent content ="Done! Here's your workout for the day" />
        <DisplayWorkout />
        </div>
        </CustomFade>
    </>)
}

export default WorkoutDisplayPage;