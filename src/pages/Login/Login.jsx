import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container style={{ backgroundColor: "#fff", marginTop: "3rem", alignItems: "center", width: "752px", height: "700px"}} className='rounded-2' >
            <h3 className='text-center py-5 fw-bold fs-1'>Login your account</h3>
            <hr style={{ height: "1px", margin: "0 auto", width: "606px", backgroundColor: "#E7E7E7" }}  />

            <Form style={{ width: "558px", margin: "0 auto", color: "#403F3F", fontSize: "20px", fontWeight: "600" }}>
                
                <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px"}} type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{backgroundColor: "#F3F3F3", height: "50px", borderRadius: "5px"}} type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-5 fs-6 fw-normal" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Conditions" />
                </Form.Group>

                <Button style={{ width: "558px", height: "65px", border: "none", backgroundColor: "#403F3F" }} className='fw-bold fs-5 mt-3 mb-3' type="submit">
                    Login
                </Button>
                <br />

                <Form.Text className='text-secondary fs-6 fw-normal'>
                    <p style={{ marginTop: "20px", textAlign: "center" }}>Don't Have An Account? <Link style={{ textDecoration: "none", color: "red", fontWeight: "700", textAlign: "center" }} to={"/register"}>Register</Link></p>
                </Form.Text>

                {/* for notification */}
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>

    );
};

export default Login;