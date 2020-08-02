import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.scss'
import SideBar from '../SideBar/SideBar';
import { FaHome, FaFileSignature } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiLoginCircleLine } from 'react-icons/ri';

const NavBar = () => {
	return(
    <>
    <section className="sidebar iWlhAO">
      <nav className="sidebar__menu">
        <div className="sidebar__items">
          <Link to='/' className='link'>
            <FaHome size={32} />
          </Link>

          <Link to='signin' className='link'>
            <RiLoginCircleLine size={32}/>
          </Link>

          <Link to='signup' className='link'>
            <FaFileSignature size={32} />
          </Link>

          <Link to='favorites' className='link'>
            <MdFavoriteBorder size={32} />
          </Link>
        </div>
      </nav>
    </section>
    <SideBar />

    </>
	);
}

export default NavBar;
