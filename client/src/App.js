//import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Exercise from "./components/pages/Exercise";
import Intake from "./components/pages/Intake";
import User from "./components/pages/User";

function App() {
  const [currentPage, setCurrentPage] = useState('Exercise')

  return (
    <div className="App">
      <NavBar changePage={setCurrentPage} />
      <Header title="Fit and Track" subtitle="Welcome to the Fit and Track App" />
      {currentPage.toLowerCase() === "exercise" ? <Exercise />
        : currentPage.toLowerCase() === "intake" ? <Intake />
          : currentPage.toLowerCase() === "user" ? <User />
            : null}
    </div>
  );
}

export default App;
