import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Learning } from "./pages/Learning";
import { News } from "./pages/News";
import { Blog } from "./pages/Blog";
import { Error } from "./pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MyNavBar } from "./components/MyNavBar";
import { MyFooter } from "./components/MyFooter";
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  },[]);
  
  return (
    <>
    <MyNavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/blog" component={Blog} />
          <Route path="/learning" component={Learning} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </Router>
    <MyFooter />
    </>
  );
}

export default App;
