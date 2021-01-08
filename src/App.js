//import {useState} from 'react';
import './App.css';
//import Example from './mycomponents/example';
import Funfact from './mycomponents/Funfact';
import Hobby from './mycomponents/Hobby';
import MyName from './mycomponents/Name';


  function App() {
    //below i am adding an event to be able to click button
    // const handleclick = (event) =>{
    //   event.preventDefault();
    // }
    return (
      <div> 
        <MyName/><br></br>
        <Hobby/><br></br>
        <Funfact/>
      </div> 
      );
}

 export default App;
