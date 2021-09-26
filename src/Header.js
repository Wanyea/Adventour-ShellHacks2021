import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png'

const NavMenuStyle = styled.div`
  .header {
    position: fixed;
    display: flex;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
}

.header::before {
    
}

.divider {
    width: 5px;
    height: auto;
    display: inline-block;
}

.nav-logo {
    height: 99px;
    width: 100px;
    margin-left: 45%;
    align-items: left;
}

.nav-items {
    display: flex;
    margin-left: auto;
    margin-right: 5%;
    align-items: center;
    opacity: 100%;
}

.nav-link {
    background-color: white;
    opacity: 50%;
    color: gray;
    padding: 20px 25px;
    text-align: center;
    text-decoration: none;
    border: 2px solid white ;
    border-radius: 20px;
    opacity: 80%;
}

.nav-link:hover {
    background-color: #A9A9A9;
    color: black;
}
`;

export default function Header(props) {
    return (
    <NavMenuStyle> 
    <div className = "header">
    <div className="justbg"></div>
    {/* Logo */}
    <Link className = "nav-title" to="/landing">
        <img className = "nav-logo" src={ logo} alt="Adventours logo" />
    </Link>

    {/* Page Links */}
    <div className = "nav-items">
        <Link className = "nav-link" to='/'>Home</Link>
        <div className="divider" />
        <Link className = "nav-link" to='/prev'>Previous Adventours</Link>
        <div className="divider" />
        <Link className = "nav-link" to='/friends'>Friends</Link>
    </div>
</div>
</NavMenuStyle> 
)
}
