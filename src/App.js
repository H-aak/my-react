// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextForm2 from './components/TextForm2';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

// let name = "Hamza Web Application";
function App() {
  const [Mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //setAlert to run this state

  // showAlert is a function that show messages
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
      document.title = "My-React - Dark Mode";
      setInterval(() => {
        document.title = "My-React - Home";
      }, 2000);
      // setInterval(() => {
      //   document.title = "My-React - Home Dark mode";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "My-React - Light Mode";
    }
  }

  // Change different colors mode 
  const changeGreen = ()=> {
    document.body.style.backgroundColor = '#35C649';
    showAlert("Green mode is enabled", "success");
  }
  const changeYellow = ()=> {
    document.body.style.backgroundColor = '#CAB911';
    showAlert("Yellow mode is enabled", "success");
  }
  const changeRed = ()=> {
    document.body.style.backgroundColor = '#C15031';
    showAlert("Red mode is enabled", "success");
  }

  return (
    <>
    {/* <Navbar title="My-React" aboutText="About React" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="My-React" mode={Mode} toggleMode={toggleMode} changeGreen={changeGreen} changeYellow={changeYellow} changeRed={changeRed} />
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text here" mode={Mode} />} />
        </Routes>
    </div>
    </Router>
    {/* <div className="container">
      <TextForm2 heading="Enter Text Here"/>
    </div> */}
    </>
  );
}

export default App;
