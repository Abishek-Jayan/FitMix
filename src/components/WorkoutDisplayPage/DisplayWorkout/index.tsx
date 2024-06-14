import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const DisplayWorkout = () => {
    return (
        <>
            <Row>
                <Col>
                    <Card className="mb-4" style={{ width: '25rem' }}>
                        <Card.Header as="h5"  style={{backgroundColor: "#FFA629"}}>Hour 1</Card.Header>
                        <Card.Body style={{backgroundColor: "#FFA629"}}>
                            <Card.Text className="mb-3" style={{backgroundColor: "#E7DF11"}}>Exercise 1 3x12</Card.Text>
                            <Card.Text className="mb-3" style={{backgroundColor: "#E7DF11"}}>Exercise 2 3x12</Card.Text>
                            <Card.Text className="mb-3" style={{backgroundColor: "#E7DF11"}}>Exercise 3 3x12</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mb-4" style={{ width: '25rem' }}>
                        <Card.Header as="h5" style={{backgroundColor: "#FFA629"}}>Hour 2</Card.Header>
                        <Card.Body style={{backgroundColor: "#FFA629"}}>
                            <Card.Text className="mb-3" style={{backgroundColor: "#E7DF11"}}>Exercise 1 3x12</Card.Text>
                            <Card.Text className="mb-3" style={{backgroundColor: "#E7DF11"}}>Exercise 2 3x12</Card.Text>
                            <Card.Text className="mb-3" style={{backgroundColor: "#E7DF11"}}>Exercise 3 3x12</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default DisplayWorkout;
