import React from "react";
// import { Link } from "react-router-dom";

function NavBar () { 

    return (
        <nav className="NavBar">
            <h1> The Harry Potter Fanpage</h1>
            <div className="links">
                <a href="/"> Home</a>
                <br/>
                <a href="/Carousel"> Explore the Characters!</a>
                <br/>
                <a href="/Quiz"> Quiz Yourself!</a>

            </div>
        </nav>
    )
}

export default NavBar;