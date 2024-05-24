import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Skill from './components/skill.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';


function App() {
  return (
   <Provider store={store}>
      <div className="App">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
   </Provider>
  );
}

export default App;
