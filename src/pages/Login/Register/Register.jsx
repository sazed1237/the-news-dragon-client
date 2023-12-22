import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser, userProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false)


    const handleRegister = event => {
        // 1. prevent page refresh
        event.preventDefault();
        setSuccess('')
        setError('')
        // 2. get form data
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        // 3. validate Password
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one UPPERCASE')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two digits')
            return;
        }
        else if (password.length < 6) {
            setError('Password must have 6 characters')
            return;
        }

        // 4. create new user
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset()
                setSuccess('Register Success')
                navigate('/category/0')
                profileUpdate(createdUser, name, photo)

            })

            .catch(error => {
                setError(error.message)
            })
    }

    // profile updated
    const profileUpdate = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
            console.log('user name and photoURL updated')
        })
        .catch(error =>{
            setError(error.message)
        })
    };


    const handleAccepted = event => {
        setAccepted(event.target.checked)

    }

    return (

        <Container style={{ backgroundColor: "#fff", marginTop: "3rem", alignItems: "center", width: "752px", height: "900px", }} className='rounded-2' >
            <h3 className='text-center py-5 fw-bold fs-1'>Register Your Account</h3>
            <hr style={{ height: "1px", margin: "0 auto", width: "606px", backgroundColor: "#E7E7E7" }} />

            <Form onSubmit={handleRegister} style={{ width: "558px", margin: "0 auto", color: "#403F3F", fontSize: "20px", fontWeight: "600", }}>
                <Form.Group className="mb-4 mt-4" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px" }} type="text" name='name' required placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px" }} type="text" name='photo' required placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px" }} type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px" }} type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-5 fs-6 fw-normal" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to={'/termsconditions'}>Terms and Conditions</Link></>} />
                </Form.Group>

                <Button style={{ width: "558px", height: "65px", border: "none", backgroundColor: "#403F3F", }} className='fw-bold fs-5 mt-3 mb-4' disabled={!accepted} type="submit" >
                    Register
                </Button>
                <br />

                <Form.Text className='text-secondary fs-6 fw-normal'>
                    <p style={{ marginTop: "20px", textAlign: "center" }}>
                        Already Have an Account?
                        <Link style={{ textDecoration: "none", color: "red", fontWeight: "700", textAlign: "center" }} to={"/login"}>Login</Link>
                    </p>
                </Form.Text>

                {/* for notification */}
                <Form.Text className='text-success text-center'>
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className='text-danger text-center'>
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;