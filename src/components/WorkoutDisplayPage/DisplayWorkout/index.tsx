import {useEffect, useState} from 'react';
import {Row, Col, Card, Collapse} from 'react-bootstrap';

const DisplayWorkout = () => {
    const [duration,setDuration] = useState(1);
    const final_duration = sessionStorage.getItem("duration") || "01:00";
    const selection = sessionStorage.getItem("selection");
    const workout = JSON.parse(localStorage.getItem("workout") || "");
    let finalArray = [];

    const musclegroupExercisePicker = (exercise_array: any[], muscle_group: string) => {

        const sorted_exercises = exercise_array.sort((a, b) => a[0] - b[0]);
        const highest_ranked = sorted_exercises.shift();

        for (let i = 0; i < sorted_exercises.length; i++) {
            sorted_exercises[i][0]-=1
        }
        highest_ranked[0] = sorted_exercises.length + 1;
        sorted_exercises.push(highest_ranked);
        for (const i in workout) {
            if (workout[i][muscle_group]) {
                workout[i][muscle_group] = sorted_exercises;
                break;
            }
        }


        localStorage.setItem("workout", JSON.stringify(workout));

        return highest_ranked[1];

    }
    const getWorkout = () => {
        let muscle1: never[] = [];
        let muscleString1 = "";
        let muscle2: never[] = [];
        let muscleString2 = "";
        let muscle3: never[] = [];
        let muscleString3 = "";
        if (selection == "push")
        {

            workout.map((item: { chest: never[]; shoulders: never[]; triceps: never[]; })=>
            {
                if (item.chest){
                    muscle1 = item.chest;
                    muscleString1 = "chest";
                }
                if (item.shoulders){
                    muscle2 = item.shoulders;
                    muscleString2 = "shoulders";
                }
                if (item.triceps){
                    muscle3 = item.triceps;
                    muscleString3 = "triceps";
                }
            })


        }
        if (selection == "pull")
        {
            workout.map((item: { back: never[]; biceps: never[]; forearms: never[]; })=>
            {

                if (item.back){
                    muscle1 = item.back;
                    muscleString1 = "back";

                }
                if (item.biceps){
                    muscle2 = item.biceps;
                    muscleString2 = "biceps";
                }
                if (item.forearms){
                    muscle3 = item.forearms;
                    muscleString3 = "forearms";
                }
            })
        }
        if (selection == "legs")
        {

            workout.map((item: { quads: never[]; hamstrings: never[]; calves: never[]; })=>
            {
                if (item.quads){
                    muscle1 = item.quads;
                    muscleString1 = "quads";
                }
                if (item.hamstrings){
                    muscle2= item.hamstrings;
                    muscleString2 = "hamstrings";
                }
                if (item.calves){
                    muscle3 = item.calves;
                    muscleString3 = "calves";
                }
            })
        }
        const muscleRandom1 = musclegroupExercisePicker(muscle1,muscleString1);
        const muscleRandom2 = musclegroupExercisePicker(muscle2,muscleString2);
        const muscleRandom3 = musclegroupExercisePicker(muscle3,muscleString3);
        
        return [muscleRandom1,muscleRandom2,muscleRandom3];

    }

    function getRoundedHour(timeStr: string) {
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
                    <Col >
                        <Card className="mb-4" style={{ width: '25rem' }}>
                            <Card.Header as="h5" style={{ backgroundColor: "#FFA629" }}>Hour {i}</Card.Header>
                            <Collapse in={true} appear={true} dimension="width">
                                <div>

                                    <Card.Body style={{backgroundColor: "#FFA629", width: '24.9rem'}}>

                                        {finalArray.map((item, index) => (
                                            <Card.Text key={index} className="mb-3"
                                                       style={{backgroundColor: "#E7DF11"}}>
                                                {item} 3 sets x 12 reps
                                            </Card.Text>
                                        ))}


                            </Card.Body>
                                </div>

                            </Collapse>

                    </Card>
                    </Col>
                </Row>
            );
        }
        return cards;
    };
    useEffect(()=>{        setDuration(getRoundedHour(final_duration));
    },[final_duration]);
    return (
       <>
           <div style={{height: 100}}>
               {renderCards()}

           </div>
        </>
    );
};

export default DisplayWorkout;
