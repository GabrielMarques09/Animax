import React from 'react';
import Logo from '../../assets/img/animax-logo.png';
import './Menu.css';
import Button from '../Button';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="Logo marca" />
    </Link>
    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo video
    </Button>
  </nav>
);

export default Menu;
