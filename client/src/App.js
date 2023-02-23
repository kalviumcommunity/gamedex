import './navbar.css';
import {FaSearch, FaHome, FaTags, FaComments, FaList} from "react-icons/fa"
import {Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';




function Navbar() {

  const handleSearch=()=>{
    const searchForm = document.querySelector('.search');
    searchForm.classList.toggle('active');
  }

  const handleHoverEnter =()=>{
    const abc = document.getElementById('navbar-links');
      abc.classList.add('skewBackGround');
  
}
const handleHoverLeave =()=>{
  const abc = document.getElementById('navbar-links');
    abc.classList.remove('skewBackGround');

}
  return (
    <>
        <header className="header">
          <div className='header-1'>
          <a href="#" class="logo" id='websiteName'>  Gamedex </a>
          

<form action="" className="search">
    <input type="search" name="" placeholder="Search here..." id="search-box"/>
    <label ><FaSearch/></label>
</form>

<div className="icons">
            <div id="search-btn" onClick={handleSearch}><FaSearch/></div>
            <Button variant="contained" startIcon={<PersonIcon/>} size='medium' className='button' style={{fontSize:'1.5rem',
              color:'black',display:'flex', alignItems:'center'}}>Login</Button>
            
        </div>

          </div>
        </header>
    </>
  )
}

export default Navbar