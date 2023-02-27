// import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Carousel from './Components/Home/Carousel/carousel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;