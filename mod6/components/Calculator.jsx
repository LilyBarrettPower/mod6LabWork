// Create a caluclator component with 2 number inputs and the operator (QUESTION 6)
import { useState } from "react";
// import useState for the user input and remebering of values 
import '../src/Calculator.css';
// import the CSS

function Caluclator() {
    const [num1, setNum1] = useState(0); // create a useState for input 1 (user interaction)
    const [num2, setNum2] = useState(0); // create a useState for input 2 (user interaction)
    const [operator, setOperator] = useState('addition'); // create a useState for the oeprator (user interaction)
    const [result, setResult] = useState(""); // create a useState fr the reuslt (remeber values)

    const calculateResult = () => {
        switch (operator) {
            case "addition":
                setResult(num1 + num2);
                break;
            case "subtraction":
                setResult(num1 - num2);
                break;
            case "multiplication":
                setResult(num1 * num2);
                break;
            case "division":
                if (num2 === 0) {
                    setResult("Cannot divide by 0"); // make sure the user doesnt try to divide by 0 
                } else {
                    setResult(num1 / num2);
                }
                break;
            default:
                setResult("Invalid operation"); // error handling 
            //using a switch statement to determine which operation should be preformed based on the operator chosen from dropdown
        }
    };

    return (
        <>
            <h2>Calculator:</h2>
            <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
            {/* create an input field for num1, onChnage is triggered when the user inputs a value. the value is converted to a floating point number */}
            <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
            {/* Same for this input field but for num2  */}
            <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="addition">+</option>
                <option value="subtraction">-</option>
                <option value="multiplication">*</option>
                <option value="division">/</option>
            </select>
            {/* Created a drop down selector for the operators */}
            <button onClick={calculateResult}>Calculate</button>
            {/* create a button which calls the calculateResult switch statements to perform the calculations on the user inputted numbers  */}
            <p>Result: {result}</p>
            {/* create an area to display the result  */}
        </>
    );
};

export default Caluclator;