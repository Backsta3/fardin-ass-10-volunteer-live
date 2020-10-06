import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Register from './Components/Register/Register';
import User from './Components/User/User';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import AdminControl from './Components/AdminControl/AdminControl';
import AdminAddEvent from './Components/AdminAddEvent/AdminAddEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <div className="container bg-dark text-light p-4 mt-4">
          <Switch>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/reg/:eventLink">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/reg">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/userEvents">
              <User></User>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/adminControl">
              <AdminControl></AdminControl>
            </Route>
            <Route path="/adminAddEvent">
              <AdminAddEvent></AdminAddEvent>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
