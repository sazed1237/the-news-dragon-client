import React, { useContext, useState } from 'react';
import './RightNav.css'
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import { AuthContext } from '../../../provider/AuthProvider';

const RightNav = () => {


    const {singInWithGoogle, singInWithGitHub} = useContext(AuthContext)

    // sing in with google
    const handleGoogleSingIn = () =>{
        singInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            alert('Your Successfully Login')
        })
        .catch(error =>{
            console.log(error)
            alert(error.message)

        })
    }

    // GitHub sing in
    const handleGitHubSingIn =() =>{
        singInWithGitHub()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            alert('Your Successfully Login')
        })
        .catch(error =>{
            console.log(error.message)
            alert(error.message)
        })
    }



    return (
        <div>
            <div className="social-login">
                <h4 className='mb-3'>Login With</h4>
                <Button onClick={handleGitHubSingIn} className='mb-2 px-5' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
                <Button onClick={handleGoogleSingIn} className='mb-2 px-5' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            </div>

            <div className="social-links mt-4 ">
                <h4 className='mb-3'>Find us on</h4>
                <ListGroup className='u'>
                    <ListGroup.Item className='text-primary'> <FaFacebook /><a href="#"> Facebook</a></ListGroup.Item>
                    <ListGroup.Item className='text-info'> <FaTwitter /><a href="#"> Twitter</a> </ListGroup.Item>
                    <ListGroup.Item className='text-danger'> <FaInstagram /><a href="#"> Instagram</a></ListGroup.Item>
                </ListGroup>
            </div>
            {/* QZone */}
            <QZone></QZone>

            <div className='right-banner mt-5 '>
                <img src={bg} alt="" />
                <div className='right-banner-text pt-5'>
                    <h2 className='mt-5'>Create an Amazing Newspaper</h2>
                    <p className='my-4'><small>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </small></p>
                    <Button className='latest rounded-0 px-3 py-3' variant="danger">Learn More</Button>
                </div>
            </div>

        </div>
    );
};

export default RightNav; 