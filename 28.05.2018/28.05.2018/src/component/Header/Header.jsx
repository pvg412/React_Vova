import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const menu = [
    {
        path: '/',
        name: 'Home'
    }, {
        path: '/team',
        name: 'Team'
    }, {
        path: '/gallery',
        name: 'Gallery'
    },
];

const Header = () => (
    <ul className='header'>
        {menu.map((item) => (
            <li key={item.name}>
                <NavLink exact to={item.path}>
                    {item.name}
                </NavLink>
            </li>
        ))}
    </ul>
);

export default Header;
