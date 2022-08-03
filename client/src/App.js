//import './App.css';
import react from 'react';
import axios from 'axios';
import Stripe from "react-stripe-checkout";

import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Exercise from "./components/pages/Exercise";
import Intake from "./components/pages/Intake";
import User from "./components/pages/User";

function App() {
  const [currentPage, setCurrentPage] = useState('Exercise')
  const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe/pay", {
        token: token.id,
        amount: totalAmount
      });
    } catch (error) {
      console.log(error);
    };
  }
  const tokenHandler = (token) => {
    handleToken(100, token);
  }
  return (
    <div className="App">
      <NavBar changePage={setCurrentPage} />
      <Header title="Fit and Track" subtitle="Welcome to the Fit and Track App" />
      {currentPage.toLowerCase() === "exercise" ? <Exercise />
        : currentPage.toLowerCase() === "intake" ? <Intake />
          : currentPage.toLowerCase() === "user" ? <User />
            : null}
      <div>
        <Stripe
          stripeKey="pk_test_51LSWYcF6Vu2ilumGTQQRUfVycDUZeQ6ZmpLQuHuLASon4vXRrIiDaMVITlWPF1mCFmPADdwMKd5HL9539hnxuh2e00lggxoIF6"
          token={tokenHandler}
        />
      </div>
    </div>

  );
}

export default App;
