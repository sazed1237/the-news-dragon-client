import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef()

    const { singIn, resetPassword } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    console.log('login page locations:', location)

    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin = event => {

        // 1. prevent page refresh
        event.preventDefault()
        setError('')
        // 2. collect form data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
      
        // 3. sing in user in firebase
        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess("Login Successful")
                // navigate to home page if login success 
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })

    }


    const handleResetPassword = () => {
        // console.log(emailRef.current.value)
        const email = emailRef.current.value ;
        if(!email){
            alert('Please Enter your email address' )
            return;
        }

        resetPassword(email)
        .then(() =>{
            alert('Please check your email')
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    return (
        <Container style={{ backgroundColor: "#fff", marginTop: "3rem", alignItems: "center", width: "752px", height: "700px", }} className='rounded-2' >
            <h3 className='text-center py-5 fw-bold fs-1'>Login your account</h3>
            <hr style={{ height: "1px", margin: "0 auto", width: "606px", backgroundColor: "#E7E7E7" }} />

            <Form onSubmit={handleLogin} style={{ width: "558px", margin: "0 auto", color: "#403F3F", fontSize: "20px", fontWeight: "600" }}>

                <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px" }} type="email" ref={emailRef} name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px" }} type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-5 fs-6 fw-normal d-flex" controlId="formBasicCheckbox">
                    <Form.Check className='flex-grow-1' type="checkbox" name='accept' label="Remember Me" />
                    <p onClick={handleResetPassword} className='mx-3 btn btn-link'><small>Forget Password?</small></p>
                </Form.Group>

                <Button style={{ width: "558px", height: "65px", border: "none", backgroundColor: "#403F3F" }} className='fw-bold fs-5 mt-3 mb-3' type="submit">
                    Login
                </Button>
                <br />

                <Form.Text className='text-secondary fs-6 fw-normal'>
                    <p style={{ marginTop: "20px", textAlign: "center" }}>Don't Have An Account? <Link style={{ textDecoration: "none", color: "red", fontWeight: "700", textAlign: "center" }} to={"/register"}>Register</Link></p>
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

export default Login;