import React from "react";

function AddQuestionButton({ handleOnClick, updatedArray }) {


    return (
        <>
            <p>My name is {updatedArray.name} and my House is {updatedArray.house}.
                Can you remember my house? Click the button below to add me to the Quiz Questions,
                and see if you can remember my house! </p>
            <button onClick={handleOnClick}> Click Me!</button>
        </>
    )
}

export default AddQuestionButton;