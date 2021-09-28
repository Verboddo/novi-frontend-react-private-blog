import React, { useState } from 'react';
import './App.css';
import HomePage from "./data/Pages/HomePage";
import {Route, Switch} from "react-router-dom";
import LoginPage from "./data/Pages/LoginPage";
import BlogStartPage from "./data/Pages/BlogStartPage";
import Blogs from "./data/Pages/Blogs";
import NavBar from "./data/Components/NavBar";


export default function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  function login() {
      toggleIsAuthenticated(true)
  }

    function logout() {
        toggleIsAuthenticated(false)
    }

  return (
      <>
          <NavBar isAuthenticated={isAuthenticated} logout={logout}/>
      <Switch>
          <Route exact path="/">
              <HomePage/>
          </Route>
          <Route exact path="/login">
              <LoginPage login={login}/>
          </Route>
          <Route exact path="/blogposts">
              <BlogStartPage />
              </Route>
          <Route path="/blog/:blogPage">
              <Blogs/>
          </Route>
      </Switch>
      </>
  );
}