import "../styles/Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function OffcanvasExample() {
  return (
    <>
      {["xxl"].map(expand => (
        <Navbar expand={expand} className="mb-3 nav_wrapper">
          <Container fluid>
            <Navbar.Brand href="/" className="nav_title">
              ์ท์ฅ ๐ช
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 nav_gap">
                  <Nav.Link href="/create">์ท๋ฑ๋ก</Nav.Link>
                  <Nav.Link href="/delete">์ท์ญ์ </Nav.Link>
                  <Nav.Link href="/read">์ท์กฐํ</Nav.Link>
                  <Nav.Link href="/transfer">์ทํ๋งค</Nav.Link>
                  <Nav.Link href="/update">์ท๋ฑ๋ก์์ </Nav.Link>
                  <Button href="/users" className="btn btn-success nav_btn">
                    ์ท์ฅ๋ฑ๋ก
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
