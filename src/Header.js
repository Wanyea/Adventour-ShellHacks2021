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

.nav-logo {
    height: 99px;
    width: 120px;
    margin-left: 15%;
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
    background-color: #d1d1d1;
    color: black;
    padding: 20px 25px;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 60px;
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
        <Link className = "nav-link" to='/prev'>Previous Adventours</Link>
        <Link className = "nav-link" to='/friends'>Friends</Link>
    </div>
</div>
</NavMenuStyle> 
)
}
