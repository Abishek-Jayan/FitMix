import React, {useEffect, useState} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import {i} from "vite/dist/node/types.d-aGj9QkWt";

const DisplayWorkout = () => {
    const [duration,setDuration] = useState(1);
    let final_duration = sessionStorage.getItem("duration") || "01:00";
    const selection = sessionStorage.getItem("selection");
    let workout = localStorage.getItem("workout") || "";
    let final_workout = JSON.parse(workout);
    let finalArray = [];

    const musclegroupWorkoutGenerator = (exercise_array, muscle_group) => {
        // When given a 2D array of [rank,exercise], extract the highest ranked object, move it to the lowest rank and update all the
        // other exercises ranks
        // Then update that section in localStorage
        // Then return the exercise string
        const sorted_exercises = exercise_array.sort((a, b) => a[0] - b[0]);
        const highest_ranked = sorted_exercises.shift();

        for (let i = 0; i < sorted_exercises.length; i++) {
            sorted_exercises[i][0]-=1
        }
        highest_ranked[0] = sorted_exercises.length + 1;
        sorted_exercises.push(highest_ranked);
        for (var i in final_workout) {
            if (final_workout[i][muscle_group]) {
                final_workout[i][muscle_group] = sorted_exercises;
                break;
            }
        }


        // Update localStorage
        localStorage.setItem("workout", JSON.stringify(final_workout));

        // Return the updated exercise string (optional, based on your requirement)
        return highest_ranked[1];



    }
    const getWorkout = () => {
        if (selection == "push")
        {
            let chest = [];
            let shoulders = [];
            let triceps = [];
            final_workout.map(item=>
            {
                if (item.chest){
                    chest = item.chest;
                }
                if (item.shoulders){
                    shoulders = item.shoulders;
                }
                if (item.triceps){
                    triceps = item.triceps;
                }
            })
            const chestRandom = musclegroupWorkoutGenerator(chest,"chest")
            const shoulderRandom = musclegroupWorkoutGenerator(shoulders,"shoulders");

            const tricepRandom = musclegroupWorkoutGenerator(triceps,"triceps")

            return [chestRandom,shoulderRandom,tricepRandom];
        }
        if (selection == "pull")
        {
            let back = [];
            let biceps = [];
            let forearms = [];
            final_workout.map(item=>
            {

                if (item.back){
                    back = item.back;
                }
                if (item.biceps){
                    biceps = item.biceps;
                }
                if (item.forearms){
                    forearms = item.forearms;
                }
            })
            const backRandom = musclegroupWorkoutGenerator(back,"back")
            const bicepsRandom = musclegroupWorkoutGenerator(biceps,"biceps")

            const forearmsRandom = musclegroupWorkoutGenerator(forearms,"forearms")

            return [backRandom,bicepsRandom,forearmsRandom];
        }
        if (selection == "legs")
        {
            let quads = [];
            let hamstrings = [];
            let calves = [];
            final_workout.map(item=>
            {
                if (item.quads){
                    quads = item.quads;
                }
                if (item.hamstrings){
                    hamstrings = item.hamstrings;
                }
                if (item.calves){
                    calves = item.calves;
                }
            })
            const quadsRandom =  musclegroupWorkoutGenerator(quads,"quads")
            const hamstringsRandom =  musclegroupWorkoutGenerator(hamstrings,"hamstrings")
            const calvesRandom =  musclegroupWorkoutGenerator(calves,"calves")

            return [quadsRandom,hamstringsRandom,calvesRandom];
        }
    }

    function getRoundedHour(timeStr) {
        const [hourStr, minuteStr] = timeStr.split(':');
        let hour = parseInt(hourStr, 10);
        const minutes = parseInt(minuteStr, 10);
        if (minutes > 0) {
            hour += 1;
        }

        return hour;
    }

    const renderCards = () => {
        const cards = [];
        for (let i = 1; i <= duration; i++) {
            finalArray = getWorkout();
            cards.push(
                <Row key={i}>
                    <Col>
                        <Card className="mb-4" style={{ width: '25rem' }}>
                            <Card.Header as="h5" style={{ backgroundColor: "#FFA629" }}>Hour {i}</Card.Header>
                            <Card.Body style={{ backgroundColor: "#FFA629" }}>
                                {finalArray.map((item, index) => (
                                    <Card.Text key={index} className="mb-3" style={{ backgroundColor: "#E7DF11" }}>
                                        {item} 3x12
                                    </Card.Text>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            );
        }
        return cards;
    };
    useEffect(()=>{        setDuration(getRoundedHour(final_duration));
    },[]);
    return (
       <>
           {renderCards()}
        </>
    );
};

export default DisplayWorkout;
