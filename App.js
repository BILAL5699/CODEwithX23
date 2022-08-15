
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
//import Alert from './Components/Alert';

function App() {
const [mode, setMode ] = useState(`light`); 
//const [alert, setAlert] = useState(null);

//const showAlert =(message, type)=>{
  //setAlert({
    //msg: message,
    //type: type
  //})
//}

const toggleMode=()=>{
  if (mode===`light`){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    //showAlert("Dark mode Enabled", "success");
    document.title=' Arrow - Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    //showAlert("Light mode Enabled", "success");
    document.title=' Arrow - Light   Mode';
  }
}
const myFunction=()=>{
console.log("Hello, Frost");
}

  return (
  <>
  <Navbar title="ARROW" abouttext="About" mode={mode} toggleMode={toggleMode} /><br />
  {/*<Alert alert={alert}/>*/}
  <h3>Welcome to Arrow</h3>
  <h4>Bilal Shuaib aka X23</h4><br />
  <button onClick={()=>{myFunction()}}>Click me</button>

  <div className="container" my-3="true">
  <TextForm heading="Enter The Text Here To Analyze"  mode={mode}/>
  {/*<About/>*/}
</div>
  
</>
 ); 
}
export default App;
