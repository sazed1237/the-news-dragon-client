import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Reset Password
    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    // Google Sing In
    const singInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // GitHub sing in
    const singInWithGitHub =() =>{
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside of auth stat change', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        resetPassword,
        singInWithGoogle,
        singInWithGitHub,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;