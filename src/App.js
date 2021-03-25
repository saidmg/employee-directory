import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import HomePage from './pages/HomePage';
// import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <Router>
      <div >
        <NavBar />
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/home' component={HomePage} />
        {/* <Route path='/error' component={NoMatch} /> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
