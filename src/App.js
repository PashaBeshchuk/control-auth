import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import ListUsers from './components/ListUsers';
import UserData from './components/UserData';



function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" render={ ()=> <Home/> } />
      <Route path="/users" render={ ()=> <ListUsers /> } />
      <Route path="/signin" render={ ()=> <SignIn /> } />
      <Route path="/user/:userId?" render={()=> <UserData/>} />
    </div>
  );
}

export default App;
