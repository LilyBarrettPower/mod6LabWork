
import './App.css'
import Greeting from '../components/Greeting'
// import the greeting component
import BigCats from '../components/BigCats'
// import the BigCats component
import SingleCats from '../components/SingleCats'
// import the SingleCats component
import Emoji from '../components/Emoji'

function App() {

  return (
    <> 
      {/* QUESTION 1: */}
      <Greeting name="Lily">
        {/* Call the greeting component with the name prop as Lily */}
        Hello Lily!
        {/* Pass Hello Lily! as a child element to the greeting component */}
      </Greeting>


      <BigCats/>
      {/* call the bigCats component */}

      <SingleCats/>
      {/* Call the SingleCats component which uses the Cat component */}

      <Emoji/>
    </>
  )
}

export default App
