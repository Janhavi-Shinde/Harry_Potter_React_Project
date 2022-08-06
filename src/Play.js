import { React, useState, useEffect, } from "react";
import QuestionCard from "./QuestionCard";
function Play({ questions }) {

    const [questionIndex, setQuestionIndex] = useState(0);
    console.log(questions);


    const currentQ = questions[questionIndex];
    const arrayLength = questions.length - 1;
    const [ternary, setTernary] = useState(false);
    const [score, setScore] = useState(0);

    console.log("currentQ's index:", questionIndex);

    function handleClick(correctAnswer) {
        // countdown.current(10);
        if (questionIndex < arrayLength) {
            console.log("questionIndex was:", questionIndex);
            setQuestionIndex(questionIndex + 1);
            console.log("questionIndex now increased to:", questionIndex);
            console.log(questionIndex, "out of", arrayLength);
        } else if (questionIndex === arrayLength) {
            console.log("questionIndex has reached", questionIndex, "out of ", arrayLength);
            setTernary(true);
        } if (correctAnswer) {
            setScore(score + 1)
        } if (questionIndex === questions[-1]) {
            // stopCountDown();
        }
    }
   
    // function stopCountDown() {
    //     clearInterval(timer);
    //     console.log("stopCountDown has been called")
    // }

    function handleStartOver() {
        setQuestionIndex(0);
        setTernary(false);
        setScore(0);

    }

    return (
        ternary ?
            <>
                <h2> GAME OVER. YOUR SCORE IS: {score} </h2>
                <button onClick={handleStartOver}>startOver</button>
                {/* {stopCountDown()} */}
            </> :
            <>
                <QuestionCard currentQ={currentQ} handleClick={handleClick} 
                 questionIndex={questionIndex}  />
                
            </>

    )
}

export default Play;

