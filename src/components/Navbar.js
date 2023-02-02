import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { Button } from "../styles/GlobalStyledComponents";

import { FaBars, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const setMobileNav = () => {
    setMobile(!mobile);
  };

  const [activeNav, setActiveNav] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 80) {
          setActiveNav(true);
        } else {
          setActiveNav(false);
        }
      });
    }
  }, []);


  return (
    <Nav activeNav={activeNav}>
      <Logo to="/">
        <span className="first">Medi</span>
        <span className="second">Care+</span>
      </Logo>
      <Menu isMobile={mobile}>
        <Link onClick={setMobileNav} to="/">
          Home
        </Link>
        <Link onClick={setMobileNav} to="/about">
          about
        </Link>
        <Link onClick={setMobileNav} to="/services">
          services
        </Link>
        <Link onClick={setMobileNav} to="/news">
          News
        </Link>
        <Button primary="true" as={Link} to="/contact" onClick={setMobileNav}>
          Contact Us
        </Button>
      </Menu>
      <MenuButton primary="true" htmlFor="menuCheckBox" onClick={setMobileNav}>
        {mobile ? <FaWindowClose /> : <FaBars />}
      </MenuButton>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 4rem;
  ${({activeNav}) => activeNav && css`
  background-image: ${({theme})=>theme.color.primaryGradiant};
  `}
  @media (max-width: 768px) {
    padding: 0 2rem;
    background-image: ${({theme})=>theme.color.primaryGradiant};
  }
  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 800;
  .first {
    color: ${({ theme }) => theme.color.primaryColor};
  }
  .second {
    color: ${({ theme }) => theme.color.secondaryColor};
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 400;
  font-size: 1.3rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.primaryColor};
  a {
    transition: 30ms;
    font-size: 1rem;
  }
  a:hover {
    font-weight: 600;
  }
  @media (max-width: 768px) {
    backdrop-filter: blur(18px);
    transition: 300ms;
    transform: ${({ isMobile }) =>
      isMobile ? "translateX(0)" : "translateX(-100%)"};
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding: 1rem 0;
  }
`;
const MenuButton = styled(Button)`
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: none;
  svg {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    display: inherit;
  }
`;

export default Navbar;
