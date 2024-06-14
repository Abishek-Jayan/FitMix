import React, { useState } from 'react';
import MainContent from "../MainContent";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

const WorkoutDurationPage = () => {
    const navigate = useNavigate();
    const [duration, setDuration] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    const validateDuration = (duration) => {
        const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!regex.test(duration)) {
            return "Invalid timeframe or format! Please enter a valid time in HH:MM format.";
        }
        return "";
    };

    const saveSelection = () => {
        const errorMessage = validateDuration(duration);
        if (errorMessage) {
            setErrorMessage(errorMessage);
            setShowModal(true);
        } else {
            setShowModal(false);
            navigate("/workoutdisplay", { state: { duration } });
        }
    };

    return (
        <>
            {/* Uncomment NavBar if needed */}
            {/* <NavBar/> */}
            <MainContent content="Enter Workout Duration" />
            <Form className="mt-3 d-flex flex-column align-items-center">
                <Form.Group controlId="durationInput">
                    <Form.Control
                        type="text"
                        value={duration}
                        onChange={handleDurationChange}
                        style={{ textAlign: 'center', width: '100px', backgroundColor: '#FFA629' }}
                        placeholder="HH:MM"
                        onSubmit={saveSelection}
                    />
                </Form.Group>
                <Button onClick={saveSelection} style={{ backgroundColor: '#FFA629' }} className="mt-3">Continue</Button>
            </Form>

            {/* Modal for displaying error messages */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default WorkoutDurationPage;
