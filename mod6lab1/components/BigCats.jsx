// Big cats component QUESTION 2:

function BigCats() {

    const cats = [
    // Add the unique ID's into the array for each cat 
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', id: 1},
        { name: 'Cougar', latinName: 'Puma concolor', id: 2},
        { name: 'Jaguar', latinName: 'Panthera onca', id: 3},
        { name: 'Leopard', latinName: 'Panthera pardus', id: 4},
        { name: 'Lion', latinName: 'Panthera leo', id: 5},
        { name: 'Snow leopard', latinName: 'Panthera uncia', id: 6},
        { name: 'Tiger', latinName: 'Panthera tigris', id: 7},
    ];

    const catItems = cats.map(cat => (
        <li key={cat.id}>{cat.name} - {cat.latinName}</li>
    ));
    // created a variable to store the cat map
    // For every cat in the cats array, iterate over them and return a list item with their name and latinName 
    //Include the key to remove the warning about keys

    return (
        <>
            <ul>
                {catItems}
                {/* Render the variable that has the cat map  */}
            </ul>
        </>
    )
}

export default BigCats;