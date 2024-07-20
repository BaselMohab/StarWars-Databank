import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navData from './navData';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);

const handleLinkClick = () => {
    setIsOpen(false);
}

return (
    <section className='navbar flex justify-center flex-wrap'>
    <button
        className={`navbar-toggler md:hidden ${isOpen ? 'rotate' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
    >
        <i className="fa-solid fa-bars"></i>
    </button>
    <div className={`${isOpen ? 'block' : 'hidden'} navbar-nav md:flex flex-row justify-center py-3 px-10 mt-10 gap-6 text-xl uppercase text-center`}>
        {navData.map((link) => {
        const { id, label, path } = link;
        return (
            <div className='navbar-link' key={id}>
            <ul>
                <li className='py-4 md:py-0'>
                <Link to={path} onClick={handleLinkClick}>{label}</Link>
                </li>
            </ul>
            </div>
        );
        })}
    </div>
    </section>
);
}

export default Header;
