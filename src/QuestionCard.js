// import {useEffect, useState} from "react";
import React from 'react';

export default function QuestionCard({ currentQ, handleClick, questionIndex, setQuestionIndex }) {

    // const [countdown, setCountdown] = useState(10);

    // let timer;
    // useEffect(() => {
    //     timer = setInterval(() => {
    //         if (countdown === 0) {
    //             setQuestionIndex(questionIndex + 1)
    //             setCountdown(10);
    //             handleClick(false);
    //         } else 
    //         setCountdown(countdown -1);
    //         console.log("ran setInterval", countdown);
    //     }, 1000)


    //     console.log(countdown);
    //     clearInterval(timer);
    // }, [questionIndex])


    return (
        <div className="QuestionCard">
            <h3> Question: {currentQ.question}</h3>
            <ul>
                {currentQ.options.map((option, index) => {
                    const correctAnswer = index === currentQ.correctIndex;
                    return (
                    <li className="answerButton" key={index}> <button onClick={() => handleClick(correctAnswer)} 
                    key={option}>{option}</button>
                    </li>)
                })}
            </ul>
            {/* <p>You have {countdown} seconds left</p> */}
        </div>
    )}