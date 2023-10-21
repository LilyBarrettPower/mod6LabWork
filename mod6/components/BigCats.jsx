// Big cats component QUESTION 2:
// Create a reverse and sort button using useState - QUEDSTION 4:
import { useState } from "react";
// import useState 
import '../src/BigCats.css';

import AddCatForm from "./AddCatForm";
// import the add cat form

function BigCats() {

    const cats = [
    // Add the unique ID's into the array for each cat 
    // added the images to this array too (Q5)
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
        { name: 'Cougar', latinName: 'Puma concolor', id: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
        { name: 'Jaguar', latinName: 'Panthera onca', id: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
        { name: 'Leopard', latinName: 'Panthera pardus', id: 4, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
        { name: 'Lion', latinName: 'Panthera leo', id: 5, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', id: 6, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
        { name: 'Tiger', latinName: 'Panthera tigris', id: 7, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
    ];

    const [currentCats, setCurrentCats] = useState(cats);
    // set the use state with the variable that will change, the function that will change it and the default value 

    // create a function to handle the deletion of a cat (Q5)
    const handleDeleteCat = (id) => {
        const updatedCats = currentCats.filter((cat) => cat.id !== id);
        // create a new array with cats with the id that do not match the id of the deleted cat
        setCurrentCats(updatedCats); //set the updates clone in state
    };

    const catItems = currentCats.map(cat => ( // changed this to currentCats.map added the image tag and delete button to each list item
    <>
            <li key={cat.id}>{cat.name} - {cat.latinName} </li> 
            <button className="BigCats button" onClick={() => handleDeleteCat(cat.id)}>Delete</button>
            <img src={cat.image} alt="Image" />
    </>
    ));
    // created a variable to store the cat map
    // For every cat in the cats array, iterate over them and return a list item with their name and latinName
    //Include the key to remove the warning about keys

    // create the function to reverse the array of cats
    const handleReversedCats = () => {
        let newCats = [...currentCats]; // clone the array
        newCats.reverse(); // modify the clone
        setCurrentCats(newCats) // set the updated clone in state 
    }

    // create the function for sorting the array alphabetically
    const handleSortedCats = () => {
        let sortedCats = [...currentCats]; // clone the array
        sortedCats.sort((cat1, cat2) => { //modify the arry using the.sort method 
            return cat1.name.localeCompare(cat2.name); // use localeCompare to ensure the strings are sorted correctly. Ensure they are sorted by the name property
        });
        setCurrentCats(sortedCats); // set the updated clone in state
    }

    // create a function for filtering the panthera cats
    const handleFilterCats = () => {
        let pantheraCats = cats.filter((cat) => // use .filter method which creates a copy of the array, doesnt modify the original
            cat.latinName.toLowerCase().includes("panthera") // provide teh filter criteria, toLowerCase to make it more accurate 
        );
        setCurrentCats(pantheraCats);//set the updated clone in state
    }

    // create a function for reseting the array 
    const handleResetCats = () => {
        setCurrentCats(cats); // set the original array in state
    };
 
    // create a function to handle the addition of more cats (QUESTION 5 )
    const handleAddCat = (newCat) => {
        newCat.id = currentCats.length + 1; // set the id of the new cats
        setCurrentCats([...currentCats, newCat]) // create a clone and add the new cat at the end 
    }
    
    return (
        <>
            <h2>Big cats component - questions 2, 4 and 5</h2>
            <ul>
                {catItems}
                {/* Render the variable that has the cat map  */}
            </ul>
            <span>
                {/* create a button for reversing the array, calling ahndleReversedCats */}
                <button className="BigCats button" onClick={handleReversedCats}>Reverse</button>
            </span>
            <span>
                {/* Create a button for sorting the array, calling handleSortedCats */}
                <button className="BigCats button" onClick={handleSortedCats}>Sort alphabetically</button>
            </span>
            <span>
                {/* button for filtering panthera cats */}
                <button className="BigCats button" onClick={handleFilterCats}>Filter Panthera</button>
            </span>
            <span>
                {/* button for resetting the array */}
                <button className="BigCats button" onClick={handleResetCats}>Reset Cats</button>
            </span>
            <div>
                <AddCatForm onAddCat={handleAddCat}></AddCatForm>
            </div>
        </>
    )
}

export default BigCats;