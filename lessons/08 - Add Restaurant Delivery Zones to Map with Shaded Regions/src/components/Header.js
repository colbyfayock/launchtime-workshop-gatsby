import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';
import Logo from 'components/Logo';

import avatarImage from '../../../shared-assets/avatar.jpg';

const Header = () => {
  const avatarStyles = {
    backgroundImage: `url(${avatarImage})`
  }
  return (
    <header className="header">
      <Container>
        <p className="header-logo">
          <Link to="/">
            <Logo />
          </Link>
        </p>
        <div className="header-account">
          <p className="header-avatar" style={avatarStyles}>
            <span className="visually-hidden">Colby Fayock</span>
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
