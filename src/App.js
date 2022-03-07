import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Marketplace from './pages/Marketplace/Marketplace';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './logo.svg'
import Details from './pages/Details/Details';



function App() {
  return (
    <Router>
      <div>

        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand id='logo'>
              <Link to='/'>
                <img
                  src={Logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-evenly w-50">
                <Nav.Link className='fs-5 fw-medium' >
                  <Link to="/">Dashboard</Link>
                </Nav.Link>
                <Nav.Link className='fs-5 fw-medium'>
                  <Link to="/marketplace">Marketplace</Link>
                </Nav.Link>
              </Nav>
              <Navbar.Collapse className='justify-content-end'>
                <Button onClick={() => alert('wow, you are a curious one!')}>Login</Button>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/details">
            <Route path=':cardId' element={<Details />} />
          </Route>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
