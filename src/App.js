import { useEffect, useState } from "react";
import FormattedStory from "./components/FormattedStory";
import Home from "./components/Home";
import Header from "./components/Header";
import NewStoryForm from "./forms/NewStoryForm";
import Loader from './components/Loader'

function App() {
  const [story, setStory] =useState(null)
  const [create, setCreate] = useState(false)

 
  return (
    <div className="App">
      <Header/>
      {!create && <Home setCreate={setCreate}/>}
      {create && <div className="app-content">
        {!story && <NewStoryForm setStory={setStory}/>}
        {story && <FormattedStory story={story}/>}
      </div>}

    </div>
  );
}

export default App;
