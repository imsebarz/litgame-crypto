import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Marketplace from './pages/Marketplace/Marketplace';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from './logo.svg'
import Details from './pages/Details/Details';

// web3 
import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connector } from './config/web3';



function App() {

  const { active, activate, deactivate, account } = useWeb3React()

  const Login = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', true)
  }, [activate])

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === "true")
      Login()
  }, [Login])


  const Logout = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

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
              <Nav className="me-auto mb-lg-0 mb-3 justify-content-evenly w-50">
                <Nav.Link className='fs-5 fw-medium' >
                  <Link to="/">Dashboard</Link>
                </Nav.Link>
                <Nav.Link className='fs-5 fw-medium'>
                  <Link to="/marketplace">Marketplace</Link>
                </Nav.Link>
                <div className='dropdown-divider bg-white d-flex d-lg-none'></div>
              </Nav>
              {
                active
                  ?
                  (<NavDropdown title='Account'>
                    <NavDropdown.Item title='Account' >{account}</NavDropdown.Item>
                  </NavDropdown>)
                  : ''}
              <Navbar.Collapse className='justify-content-end'>
                {
                  active
                    ?
                    <Button onClick={() => Logout()}>Logout</Button>
                    :
                    <Button onClick={() => Login()}>Login</Button>
                }
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
