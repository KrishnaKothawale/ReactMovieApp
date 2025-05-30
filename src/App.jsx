import "./css/App.css";
import { Routes, Route } from "react-router-dom";
// import MovieCard from "./components/MovieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";


function App() {

  return (
    <MovieProvider>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/favorites" element= {<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
