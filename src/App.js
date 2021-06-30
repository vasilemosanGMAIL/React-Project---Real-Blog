import "./App.css";
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Main from "./components/Main";
import { Switch, Route} from "react-router-dom";


function App() {
  return (
   <>
    <Nav />
    <Switch>
      <Route path="/" exact={true} component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/post" component={Post} />
      <Route path="/contact" component={Contact} />
    </Switch>
    </>

  );
}

export default App;
