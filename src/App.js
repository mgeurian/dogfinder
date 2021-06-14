import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import FindDogDetails from './FindDogDetails';
import DogList from './DogList';
import duke from './images/duke.jpg'
import perry from './images/perry.jpg'
import tubby from './images/tubby.jpg'
import whiskey from './images/whiskey.jpg'

function App({dogs}) {

  // I tried to filter dog details here using useParams, but couldn't get it to work. I'd like to work on doing that in our next call. Getting things to work before refactoring and creating more Files. Is it easier to break up stuff into separate files, or should that come later? I want to build stuff then make it better later. But relied on the FilterDogDetails component of the solution to complete this.


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={dogs}/>
        </Route>
        <Route path="/dogs/:name" >
          <FindDogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>

  );
};

export const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

App.defaultProps = { dogs };

export default App;


