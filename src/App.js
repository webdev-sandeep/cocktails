import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//Import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// Import component
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cocktail/:id" element={<SingleCocktail/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
