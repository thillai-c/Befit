import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlePost/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signin/Signup";
import { Context } from "./context/Context";

import News from "./pages/news/News";
import Research from "./pages/research/Research";
import FAQ from "./pages/faq/FAQ";
import HomePage from "./pages/homePage/homePage";
import BMI from "./pages/bmi/BMI";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <HomePage />
          <Footer />
        </Route>
        <Route path="/posts">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/signup">
          {user ? (
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          ) : (
            <Signup />
          )}
        </Route>
        <Route path="/login">
          {user ? (
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/post/:id">
          <Navbar />
          <SinglePost />
          <Footer />
        </Route>
        <Route path="/write">
          {user ? (
            <>
              <Navbar />
              <Write />
              <Footer />
            </>
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/settings">
          {user ? (
            <>
              <Navbar />
              <Settings />
              <Footer />
            </>
          ) : (
            <Login />
          )}
        </Route>

        <Route exact path="/news">
          <Navbar />
          <News />
          <Footer />
        </Route>
        <Route path="/research">
          <Navbar />
          <Research />
          <Footer />
        </Route>
        <Route exact path="/faq">
          <Navbar />
          <FAQ />
          <Footer />
        </Route>
        <Route exact path="/bmi">
          <Navbar />
          <BMI />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
