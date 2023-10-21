// QUESTION 3 :
import { useState } from "react";
// import useState to handle the user interaction and remeber the value stored in state
import happyEmoji from '../src/assets/happy.jpeg';
import sadEmoji from '../src/assets/sad.jpeg';
// import the emojis and store in happyEMoji and sadEmoji
import '../src/Emoji.css';
// import the css for the emoji images

const Emoji = () => {
    const [emoji, setEmoji] = useState('happy'); //initial state of the emoji is "happy"
    // emoji is what is changing, setEmoji is what is changing it

    const handleMood = () => {
        setEmoji(emoji === 'happy' ? 'sad' : 'happy'); //define setEmoji function to change state using a handle function 
    };
    return (
        <div>
            <h2>Emoji component, question 3</h2>
            <img className="Emoji image" src={emoji === 'happy' ? happyEmoji : sadEmoji} alt="Emoji" />
            {/* if the mood is happy, display the happyEmoji, if not display the sadEmoji */}
            <p>Current mood: {emoji}</p>
            {/* display the emoji here */}
            <button onClick={handleMood}>Change mood!</button>
            {/* Add a button to toggle between the moods  */}
        </div>
    );
};

export default Emoji;
   



