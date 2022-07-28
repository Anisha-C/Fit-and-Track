//import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Exercise from "./components/pages/Exercise";
import Food from "./components/pages/Food";
import Water from "./components/pages/Water";
import User from "./components/pages/User";
import Contact from './components/pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Exercise')

  return (
    <div className="App">
      <NavBar changePage={setCurrentPage} />
      <Header title="Fit and Track" subtitle="Welcome to the Fit and Track App" />
      {currentPage === "Excercise" ? <Exercise />
        : currentPage === "Food" ? <Food />
          : currentPage === "Water" ? <Water />
            : currentPage === "User" ? <User />
              : <Contact />}
    </div>
  );
}

export default App;
