import React from 'react';
import ListDeleteButton from './ListDeleteButton';


function ShowList({ questions }) {

    const card = questions && questions.map(q => (
        <li className="individualQ" key={q.id} >
            <h3>{q.question} <br/> </h3>

            <label htmlFor="selectAnswers">
                Pick your answer:
            </label>
            <select name="selectAnswers" defaultValue={q.correctIndex} >
                {q.options.map((option, index) => (
                    <option key={index} value={index}>
                        {option}
                    </option>
                ))}
            </select>
            <ListDeleteButton id={q.id}/>
        </li>
    ))
    return (
        <>
            <h2>List of Questions</h2>
            <ul className="QCard">
            {card}
            </ul>
            
        </>


    )

}

export default ShowList;