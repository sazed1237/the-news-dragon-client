import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="m-auto">
                            <Link className='text-secondary text-decoration-none ps-3' to={'/'}>Home</Link>
                            <Link className='text-secondary text-decoration-none ps-3' to={"/about"}>About</Link>
                            <Link className='text-secondary text-decoration-none ps-3' to={"/career"}>Career</Link>
                        </Nav>
                        <Nav>
                            {/* dynamic user photo */}
                            {user &&
                                // <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }} src={user.photoURL} alt="" />

                            }

                            {user ?
                                <Button onClick={handleLogOut} className='rounded-0 px-5 ' variant="dark">Log Out</Button>
                                :
                                <Link to={'/login'}>
                                    <Button className='rounded-0 px-5' variant="dark">Login</Button>
                                </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;