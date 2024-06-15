import MainContent from "../MainContent";
import {useNavigate} from "react-router-dom";
import data from "../../base_workout.json";
import {Button} from "react-bootstrap";
const SplashPage = () => {
    const navigate = useNavigate();
    const loadWorkout = () => {
        localStorage.setItem("workout",JSON.stringify(data));
        navigate("/workoutselect")
    }
    return (<>
        {/*<NavBar/>*/}
        <MainContent content="Hi, Welcome to FitMix"/>
        <Button onClick={loadWorkout}  style={{ backgroundColor: '#FFA629' }} className="mt-3">Build Workout</Button>

    </>)
}

export default SplashPage;