import MainContent from "../MainContent";
import data from "../../base_workout.json";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import CustomFade from "../CustomFade";

const SplashPage = () => {
    const [open,setOpen] = useState(true);
    useEffect( () => {
        if(!localStorage.getItem("workout")) {console.log("Loading Workout!");
            localStorage.setItem("workout",JSON.stringify(data));}

    },[]);
    return (<>
        {/*<NavBar/>*/}
        <CustomFade open={open} goto = "/workoutselect">
            <div>
        <MainContent content="Hi, Welcome to FitMix"/>
        <Button onClick = {()=>setOpen(prevState => !prevState)}  style={{ backgroundColor: '#FFA629' }} className="mt-3">Build Workout</Button>
        </div>
        </CustomFade>
    </>)
}

export default SplashPage;