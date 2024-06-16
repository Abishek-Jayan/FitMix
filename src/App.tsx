import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import {Container} from "react-bootstrap";

import SplashPage from "./components/SplashPage/index.js";
import WorkoutSelectPage from "./components/WorkoutSelectPage/index.js";
import WorkoutDurationPage from "./components/WorkoutDurationPage/index.js";
import WorkoutDisplayPage from "./components/WorkoutDisplayPage/index.js";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Container fluid className="text-center">
                <TransitionRouter />
            </Container>
        </Router>
    );
};

const TransitionRouter = () => {
    const location = useLocation();

    return (

                <Routes location={location}>
                    <Route path="/" element={<SplashPage />} />
                    <Route path="/workoutselect" element={<WorkoutSelectPage />} />
                    <Route path="/workoutduration" element={<WorkoutDurationPage />} />
                    <Route path="/workoutdisplay" element={<WorkoutDisplayPage />} />
                </Routes>

    );
};

export default App;
