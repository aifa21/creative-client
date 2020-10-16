import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';

import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';

import AddReview from './components/Home/AddReview/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import ReviewList from './components/Dashboard/ReviewList/ReviewList';
import Admin from './components/Admin/serviceTable';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
     
    <Router>
   
      <Switch>
      
      <Route path="/home">
         
          <Home></Home>
        </Route>
      <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/order">
            <Dashboard></Dashboard>
          </PrivateRoute>
           <PrivateRoute path="/servicelist">
             <ServiceList></ServiceList>
           </PrivateRoute>
           <Route path="/reviewlist">
             <ReviewList></ReviewList>
           </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
