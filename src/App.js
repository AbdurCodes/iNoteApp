import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Addnote from './components/Addnote';
import Allnotes from './components/Allnotes';


function App() { 
  return (
    <>
    <NoteState> 
      <Router>
      <Navbar />
      <h1 className='text-center my-4'>iNoteBook - Your Notekeeping App</h1>
      <Routes>

          <Route path="/" exact Component={Home} />

          <Route path="/about" exact Component={About} />
          
          <Route path="/addnote" exact Component={Addnote} />

          <Route path="/allnotes" exact Component={Allnotes} />

          </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;