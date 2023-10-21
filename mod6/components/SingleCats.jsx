import Cat from "./Cat";
// import Cat component


// create the single cats component
function SingleCats() {
        const cats = [
            // Add the unique ID's into the array for each cat 
            // Add the images for each cat
            { name: 'Cheetah', latinName: 'Acinonyx jubatus', id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
            { name: 'Cougar', latinName: 'Puma concolor', id: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
            { name: 'Jaguar', latinName: 'Panthera onca', id: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
            { name: 'Leopard', latinName: 'Panthera pardus', id: 4, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
            { name: 'Lion', latinName: 'Panthera leo', id: 5, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
            { name: 'Snow leopard', latinName: 'Panthera uncia', id: 6, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
            { name: 'Tiger', latinName: 'Panthera tigris', id: 7, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
        ];

        const catItems = cats.map(cat => (
            <Cat 
                // use the Cat component
                // create the key
                key={cat.id}
                // create the name
                name={cat.name}
                // create the latin name
                latinName={cat.latinName}
                // create the image
                image = {cat.image}
            />
            
        ));
    return (
        <>
            <h2>Single cat component for rendering single cats - part of question 2</h2>
            <ul>
                {/* render catItems map */}
                {catItems}
            </ul>
        </>
    )
}

export default SingleCats;