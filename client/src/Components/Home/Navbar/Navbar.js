import './navbar.css';
import { FaSearch, FaHome, FaTags, FaComments, FaList } from "react-icons/fa"
import PersonIcon from '@mui/icons-material/Person';
import image from '../../../assets/logo.png';





function Navbar() {

  const handleSearch = () => {
    const searchForm = document.querySelector('.search');
    searchForm.classList.toggle('active');
  }

  const handleHoverEnter = () => {
    const abc = document.getElementById('navbar-links');
    abc.classList.add('skewBackGround');

  }
  const handleHoverLeave = () => {
    const abc = document.getElementById('navbar-links');
    abc.classList.remove('skewBackGround');

  }
  return (
    <>
      <header className="header">
        <div className='header-1'>
          <div className='logo'>
            <a href="#" id='websiteName'> <img src={image} className="logo-img" /> </a>
          </div>


          <form action="" className="search">
            <input type="search" name="" placeholder="Search here..." id="search-box" />
            <label><FaSearch className='search-logo' /></label>
          </form>

          <div className="icons">
            <div id="search-btn" onClick={handleSearch}><FaSearch /></div>
            <div className='nav-btn'>
              <button className='nav-button'>Bookmarks</button>
              <button className='nav-button'><PersonIcon />Login</button>
            </div>

          </div>

        </div>
      </header>
    </>
  )
}

export default Navbar