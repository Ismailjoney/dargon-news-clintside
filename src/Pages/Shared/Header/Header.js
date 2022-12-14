import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaStamp, IconName } from "react-icons/fa";
import { Button, Image } from 'react-bootstrap';




const Header = () => {
    const { user, logOut} = useContext(AuthorContext);

    const handleLogout = () => {
        logOut()
        .then(() =>{})
        .catch((error) => console.error(error))
    }
  
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><span className='text-warning'><Link to ='/'>Dragon</Link></span>News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ? 
                                    <>
                                    <span>
                                        {user.displayName}
                                    </span>
                                    <Button varient="light" onClick={handleLogout}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                    <Link to='/login'>Log In</Link>
                                    <Link to = '/regeister'>Regiester</Link>
                                    </>
                                   
                                }
                            </>
                            <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ? 
                                <Image 
                                style={{height:`48px`}}
                               roundedCircle
                                src={user.photoURL}
                                ></Image> : <FaStamp></FaStamp>
                            }
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;