import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
      <Navbar collapseOnSelect expand="lg" className="border-bottom px-4 mb-2">
        <Navbar.Brand href="/">Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header