// Create the greeting component - QUESTION 1 
function Greeting(props) {

    return (
        // Use fragments as the surrounding element
        <>
            {/* If the name prop is supplied render hello Name, if the name prop isn't supplied the render hello world */}
            {props.name ? <h3>Hello {props.name}!</h3> : <h3>Hello world!</h3>}
            {/* Render the Hello world in a h3 heading */}
            {props.children}
            {/* allow children to render below the first greeting to allow for greetings via children */}
        </>
    )
};

export default Greeting;
// export greeting so it can be used in App.jsx