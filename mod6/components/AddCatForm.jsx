// create an addCatForm component to add new big cats to the arrayt (QUESTION5) 
import { useState } from "react";
// import use State
import '../src/AddCatForm.css';
// import the css

function AddCatForm({onAddCat}) { // define the AddCatForm function which recieves onAddCat as a prop 
    const [name, setName] = useState('') // set the state for name, latin name and image, default for all is an empty string
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => { //define handleSubmit function which is called when the subbmit button is pressed
        e.preventDefault(); // prevent the page from reloading
        onAddCat({ name, latinName, image }) // call the onAddCar function with an object as its argument
        setName(""); //get the inputs to reset to empty after submission
        setLatinName("");
        setImage("");
    }
    return (
        <div className="AddCatForm componentBox">
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input name="name" value={name}
                        onChange={(e) => setName(e.target.value)} />
                    {/* onChange is an event handler that is triggered when there is some user input, this updates the name state with the value provided  */}
                </label>
                <label>Latin name:
                    <input name="latinName" value={latinName}
                        onChange={(e) => setLatinName(e.target.value)} />
                </label>
                <label>Image URL:
                    <input type="url" name="image" value={image}
                        onChange={(e) => setImage(e.target.value)}/>
                </label>
                <button>Add Big Cat</button>
                {/* buttons will all be "submit" unless specified otherwise  */}
            </form>
        </div>
    )
}

export default AddCatForm;