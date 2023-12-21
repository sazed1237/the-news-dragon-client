import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    // check user exist
    if(loading){
        return <Spinner style={{height: "70px", width: "70px", margin: "200px 450px", }}  animation="border" variant="success" />
    }

    if(user){
        return children;
    }
   
    // else navigate to login
    return  <Navigate state={{from: location}} to={"/login"} replace ></Navigate>;

};

export default PrivateRoute;


/***
 * ----------------------
 *         STEPS
 * ----------------------
 * 1. check user is logged in or not 
 * 2. if user is logged in, then allow them to visit the page
 * 3. else redirect the user to login page
 * 4. setup the private router 
 * 5. handle loading
 * 
*/