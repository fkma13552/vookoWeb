import React, {useState} from 'react';
import './App.css';
import Header from "../header";
import MyProfilePage from "../myProfilePage";
import PeopleList from "../peopleList";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    const data = [
        {name: 'A', id:'1', photoUrl:'/user-1.jpg'},
        {name: 'B', id:'2', photoUrl:'/user-2.jpg'},
        {name: 'C', id:'3', photoUrl:'/user-3.jpg'},
        {name: 'D', id:'4', photoUrl:'/user-4.jpg'},
        {name: 'E', id:'5', photoUrl:'/user-5.jpg'},
        {name: 'F', id:'6', photoUrl:'/user-6.jpg'},
        {name: 'G', id:'7'},
        {name: 'H', id:'8'},
        {name: 'I', id:'9'},
        {name: 'J', id:'10'},
        {name: 'K', id:'11'},
    ];

    function loadNextUsers() {
        //todo logic of downloading next page of filtered users
    }

  return (
      <>
        <Router>
            <Header />
                <Route component={MyProfilePage} path='/myProfile' />
            <Route path='/people'>
                <PeopleList data={data}/>
            </Route>
        </Router>
      </>

  );
}
export default App;
