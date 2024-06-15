import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import {Container} from "react-bootstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import SplashPage from "./components/SplashPage/index.js";
import WorkoutSelectPage from "./components/WorkoutSelectPage/index.js";
import WorkoutDurationPage from "./components/WorkoutDurationPage/index.js";
import WorkoutDisplayPage from "./components/WorkoutDisplayPage/index.js";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Container fluid className="d-flex flex-column align-items-center text-center justify-content-center vh-100" style={{ backgroundImage: 'url(../public/background/vivid-blurred-colorful-wallpaper-background.jpg)', backgroundSize: 'cover' }}>
                <TransitionRouter />
            </Container>
        </Router>
    );
};

const TransitionRouter = () => {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                classNames="page"
                timeout={{
                    enter: 600, // Total duration of enter transition: 300ms delay + 300ms transition
                    exit: 300  // Duration of exit transition
                }}
            >
                <Routes location={location}>
                    <Route path="/" element={<SplashPage />} />
                    <Route path="/workoutselect" element={<WorkoutSelectPage />} />
                    <Route path="/workoutduration" element={<WorkoutDurationPage />} />
                    <Route path="/workoutdisplay" element={<WorkoutDisplayPage />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default App;
