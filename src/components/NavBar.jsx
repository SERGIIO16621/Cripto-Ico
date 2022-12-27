import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navResponsive = useRef(null);
  const updateActiveLink = (value) => {
    setActiveLink(value);
  };
  const handlerClick = () => {
    setToggle(!toggle);
    console.log(navResponsive.current.className);
  };
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {};
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={scrolled ? "scrolled" : "" || toggle ? "background" : ""}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => updateActiveLink("home")}>
          CRIPTO <span>ICO</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handlerClick}
        />
        <Navbar.Collapse id="responsive-navbar-nav" ref={navResponsive}>
          <Nav>
            <Nav.Link
              href="#home"
              onClick={() => {
                updateActiveLink("home");
                setToggle(false);
              }}
              className={
                activeLink === "home" ? "Active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#price"
              onClick={() => {
                updateActiveLink("price");
                setToggle(false);
              }}
              className={
                activeLink === "price" ? "Active navbar-link" : "navbar-link"
              }
            >
              Price
            </Nav.Link>
            <Nav.Link
              href="#profil"
              onClick={() => {
                updateActiveLink("profil");
                setToggle(false);
              }}
              className={
                activeLink === "profil" ? "Active navbar-link" : "navbar-link"
              }
            >
              Profil
            </Nav.Link>
            <Nav.Link
              href="#aboutUs"
              onClick={() => {
                updateActiveLink("aboutUs");
                setToggle(false);
              }}
              className={
                activeLink === "aboutUs" ? "Active navbar-link" : "navbar-link"
              }
            >
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#login"
              onClick={() => {
                updateActiveLink("login");
                setToggle(false);
              }}
              className={activeLink === "login" ? "" : "navbar-link"}
            >
              Login
            </Nav.Link>
            <button className="button-get-started">Get Started</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
