import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Skill from './components/skill.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';



function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />

    </div>
  );
}

export default App;
