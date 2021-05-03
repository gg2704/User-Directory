import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Employee from "./components/Employee";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Employee />
      
      
    </div>
  );
}

export default App;