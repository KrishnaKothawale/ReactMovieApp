import "./css/App.css";
import { Routes, Route } from "react-router-dom";
// import MovieCard from "./components/MovieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/favorites" element= {<Favorites />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
