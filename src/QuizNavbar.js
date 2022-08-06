import React from "react";
import {Link, useRouteMatch } from "react-router-dom";
 



function QuizNavBar () {
    let { url } = useRouteMatch();
    console.log("path: ", url);
    return (
        <div id="quizNavbar">
            <Link to={`${url}/ShowList`}> All questions</Link>
                <br/>
            <Link to= { `${url}/AddNew`}>Add your own question</Link>
                <br/>
            <Link to={ `${url}/Play`}> Play Quiz </Link>

        </div>
    )
}
export default QuizNavBar;