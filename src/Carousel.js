import { React, useState, useEffect } from 'react';
import Button from "./Button";
import Box from "./Box";
import AddQuestionButton from './AddQuestionButton';
import './Carousel.css';

export default function Carousel({ apiData }) {

    const images = apiData.map(element => element.image);
    // const imgArr = images
    const imgArr = images.filter((elem) => (elem ? elem : null));
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState('firebrick');
    const lastIndex = imgArr.length - 1;
    // const lastIndex = 10
    

    const object = apiData.map(elem => ({ image: elem.image, name: elem.name, house: elem.house }));
    const validObject = JSON.stringify(object);
    const validObjectTwo = JSON.parse(validObject);
    // console.log('parsed: ', validObjectTwo);
    // console.log('stringified: ', validObject);
    // console.log(typeof validObjectTwo); //=> object
    const tenArray = validObjectTwo.filter(elem => elem.image ? elem : null);
    

    

    function changeIndex() {
        console.log('starting index:', index);
        
        console.log(color);
        console.log('changeIndex has been called');
        if (index < lastIndex) {
            setIndex(index + 1);
        } else if (index >= lastIndex) {
            setIndex(0);
        }
        
    }
    // let updatedArray = imgArr[index];
    let updatedArray = tenArray[index];
    useEffect (()=>{
        colourChanger(updatedArray.house)
        console.log("I have changed color now to: ", color);
        console.log("but I am house: ", updatedArray.house);
    },[index])
    console.log('updated imgArr index to :', index);


        function colourChanger (param) { 
            switch (param) {
                case 'Gryffindor':
                    setColor('firebrick');
                    // console.log("I have changed to: ", color);
                    // console.log("but I am house: ", param);
                    break;
                case 'Slytherin':
                    setColor('darkgreen');
                    // console.log("I have changed to: ", color);
                    // console.log("but I am house: ", param);
                    break;
                case 'Ravenclaw':
                    setColor('midnightblue');
                    // console.log("I have changed to: ", color);
                    // console.log("but I am house: ", param);
                    break;
                case 'Hufflepuff':
                    setColor('chocolate');
                    // console.log("I have changed to: ", color);
                    // console.log("but I am house: ", param);
                    break;
                    default: setColor('darkblue');
                          
    
        }}
        
        // console.log(updatedArray.house);

    function handleOnClick(event) {
        event.preventDefault();
        const houseArray = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin",];
        const calcIndex = houseArray.indexOf(updatedArray.house);
        console.log("house:", updatedArray.house, "correctIndex:", calcIndex);
        fetch('http://localhost:4000/questions', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                question: `What house does ${updatedArray.name} belong to?`,
                options: [
                    "Gryffindor",
                    "Ravenclaw",
                    "Hufflepuff",
                    "Slytherin",
                ],
                correctIndex: parseInt(calcIndex),
            })
        }).then(() => { console.log('new formData added') })


    }
    

    return (
        <>
        
        <p> Click the 'Next' button to explore the main Hogwarts students! </p>
            <Button changeIndex={changeIndex} />
            <Box updatedArray={updatedArray} color={color}  />
            <AddQuestionButton handleOnClick={handleOnClick} updatedArray={updatedArray} />
        </>
    )
}

