import React from 'react';

type HeaderProps = {
  logoSrc: string;
  headerName: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, headerName }) => {
  return (
    <header>
      <img src={logoSrc} alt="Logo" />
      <h1>{headerName}</h1>
    </header>
  );
};

export default Header;
