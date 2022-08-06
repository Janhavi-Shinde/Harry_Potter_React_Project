import { React } from 'react';
function Box({ updatedArray, color }) {

console.log("from BoX componenet: ", color);
// const boxy = useRef();
// boxy.classList.add(color);
// console.log(boxy.classList);


    return (
        <div  className="Box"  style={{backgroundColor: color}} >
            <img src={updatedArray.image} alt='character' />
        </div>
    )
}
export default Box;