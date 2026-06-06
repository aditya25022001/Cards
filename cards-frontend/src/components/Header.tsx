import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  
  const navigator = useNavigate();

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = (location: string) => {
    handleClose();
    navigator(location);
  }
  
  return (
    <>
      <div className='menuIconBack'>
        <i onClick={handleShow} className="menuIconHeader bi bi-list"></i>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cards</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3">
          <Link to="/" onClick={() => navigate('/')}>Home</Link>
          <Link to="/game" onClick={() => navigate('/game')}>Games</Link>
          <Link to="/features" onClick={() => navigate('/features')}>Features</Link>
          <Link to="/pricing" onClick={() => navigate('/pricing')}>Pricing</Link>
          <Link to="/leaderboard" onClick={() => navigate('/leaderboard')}>Leaderboard</Link>
          <Link to="/login" onClick={() => navigate('/login')}>Login</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header