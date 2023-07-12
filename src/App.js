import { useEffect, useState } from "react";
import FormattedStory from "./components/FormattedStory";
import Header from "./components/Header";
import NewStoryForm from "./forms/NewStoryForm";


function App() {
  const [story, setStory] =useState(null)

 
  return (
    <div className="App">
      <Header/>
      <div className="app-content">
        {!story && <NewStoryForm setStory={setStory}/>}
        {story && <FormattedStory story={story}/> }
      </div>


    </div>
  );
}

export default App;
