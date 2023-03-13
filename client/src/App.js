import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Home/Navbar/Navbar';
import Carousel from './Components/Home/Carousel/carousel';
import Genre from './Components/Home/Genre/genre';
import List from './Components/Home/List/list'
import Info from './Components/Game Page/main_info/info'
import Mission from './Components/Game Page/mission_info/mission'
import Login from './Components/Login/login'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Carousel /> */}
      {/* <Genre /> */}
      {/* <List /> */}
      {/* <Info /> */}
      {/* <Mission /> */}
      <Login />
    </div>
  );
}

export default App;