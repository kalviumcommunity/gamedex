import './navbar.css';
import { FaSearch } from "react-icons/fa"
import image from '../../../assets/logo.png';
import { MdClose } from "react-icons/md"
import { useState } from 'react';




function Navbar() {

  let searchBtn = document.querySelector('.searchBtn');
  let closeBtn = document.querySelector('.closeBtn');
  const searchBox = document.getElementById('search');
  const [searchButton, setSearchButton] = useState(true)

  const handleClick = () => {
      setSearchButton(!searchButton)
  }

  // const handleSearch = () => {
  //   const searchForm = document.querySelector('.search');
  //   searchForm.classList.toggle('active');
  // }

  // const handleHoverEnter = () => {
  //   const abc = document.getElementById('navbar-links');
  //   abc.classList.add('skewBackGround');

  // }
  // const handleHoverLeave = () => {
  //   const abc = document.getElementById('navbar-links');
  //   abc.classList.remove('skewBackGround');

  // }
  return (
    <>
      <div className='container_nav'>
        <header className="header">
          <div className='logo'>
            <a href="#" id='websiteName'> <img src={image} className="logo-img" /> </a>
          </div>
          <div className="group">
            <ul className="navigation">
              <li><a href="#">Bookmarks</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
          <div className="search">
            <span className="icon">
              {searchButton ? <FaSearch onClick={handleClick} className='searchBtn' /> : <MdClose onClick={handleClick} className='closeBtn' />}
            </span>
          </div>
          <div id='search' className={searchButton ? "searchBox" : "searchBox active"}>
            <input type="text" placeholder='Search here . . .' />
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar

{/* <div className='header-1'>
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

        </div> */}