import React from "react";
function ListDeleteButton ({id}){ 

    function handleDelete() {
        fetch(`http://localhost:4000/questions/${id}`, {
          method: 'DELETE'
        }).then(() => { console.log(`delete request sent for question number ${id}`) })
      }

      return (
      <button id='deleteButton' onClick={handleDelete}> Delete Question </button>
      )
} 

export default ListDeleteButton;
