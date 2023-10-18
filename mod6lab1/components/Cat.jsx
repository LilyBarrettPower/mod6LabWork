// Import the styling for the images
import '../src/Cat.css'

function Cat({ name, latinName, image }) {
    // Add name, latin name and image as props to the Cat component
    // Haven't added key as I don't want it to render.
    return (
        <>
            <li>
                <h3>{name}</h3> <span>{latinName}</span>
                {/* Render the name and latin name */}
                <div>
                    <img className="Cat image" src={image} alt="Image of the big cat"/>
                    {/* Render the image  */}
                </div>
            </li>
        </>
    )
}

export default Cat;