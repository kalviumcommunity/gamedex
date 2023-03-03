import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Home/Navbar/Navbar';
import Carousel from './Components/Home/Carousel/carousel';
import Genre from './Components/Home/Genre/genre';
import Info from './Components/Game Page/info'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Carousel />
      <Genre /> */}
      <Info />
    </div>
  );
}

export default App;