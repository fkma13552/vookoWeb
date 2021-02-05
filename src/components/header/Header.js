import React from "react";
import Reactstrap, {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <>
            <Navbar className='header' light expand='md'>
                    <NavbarBrand className='name'>Vooko</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                            <NavLink to='/people' className='nav-link'>People</NavLink>
                    </NavItem>
                    <NavItem>
                            <NavLink to='/chats' className='nav-link'>Chats</NavLink>
                    </NavItem>
                    <NavItem>
                            <NavLink to='/myProfile' className='nav-link'>My profile</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </>
    );
}

export default Header;