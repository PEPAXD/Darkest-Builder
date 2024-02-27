import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <Navbar.Brand href="#home">Darkest Builder</Navbar.Brand>
      <Nav className="navBar">
        <Container>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#GameMap">GameMap</Nav.Link>
        <Nav.Link href="#Enemies">Enemies</Nav.Link>
        <Nav.Link href="#HeroBuilds">Hero-Builds</Nav.Link>
        <Nav.Link href="#Backstories">Backstories</Nav.Link>
        <Nav.Link href="#Tierlist">TierList-Game</Nav.Link>
        </Container>
      </Nav>
    </header>
  );
}

export default Header;
