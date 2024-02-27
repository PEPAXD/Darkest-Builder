import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <Container>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#" >Darkest Builder</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
