import { React, useState } from 'react';
 

function AddNew() {
    const [formData, setFormData] = useState({
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctIndex: 0,
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:4000/questions', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                question: formData.question,
                options: [
                    formData.answer1,
                    formData.answer2,
                    formData.answer3,
                    formData.answer4,
                ],
                correctIndex: parseInt(formData.correctIndex),
            })
        }).then(() => { console.log('new formData added') })
        console.log(formData);
    }

    return (
        <section>
            <h1>New Question</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Question:
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Answer 1:
                    <input
                        type="text"
                        name="answer1"
                        value={formData.answer1}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Answer 2:
                    <input
                        type="text"
                        name="answer2"
                        value={formData.answer2}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Answer 3:
                    <input
                        type="text"
                        name="answer3"
                        value={formData.answer3}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Answer 4:
                    <input
                        type="text"
                        name="answer4"
                        value={formData.answer4}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Correct Answer:
                    <select
                        name="correctIndex"
                        value={formData.correctIndex}
                        onChange={handleChange}
                    >
                        <option value="0">{formData.answer1}</option>
                        <option value="1">{formData.answer2}</option>
                        <option value="2">{formData.answer3}</option>
                        <option value="3">{formData.answer4}</option>
                    </select>
                </label>
                <br />
                <button type="submit">Add Question</button>
            </form>
        </section>
    );

}

export default AddNew;