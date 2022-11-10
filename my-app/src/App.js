import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import community from './pages/community';
import technology from './pages/technology';
import creative from './pages/creative';
import home from './pages/home';
import Home from './pages/home';
import { NavigationBar } from './components/Navbar/Navigationbar';

function App() {
  return (
    <>

    <React.Fragment>
 
    <Router>
      <Routes>
        <Route path='/home' component={home} />
        <Route path='/technology' component={technology} />
        <Route path='/creative' component={creative} />
        <Route path='/community' component={community} />
      </Routes>

      <Home/>
      
    </Router>

    </React.Fragment>

    

   


    </>





  );
}

export default App;