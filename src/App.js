// import logo from './logo.svg';
import './App.scss';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';

import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router primary={false}>
        <Home path="/" />
        <About path="/about" />
        <Experience path="/experience" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
