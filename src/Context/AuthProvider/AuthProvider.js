import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,sendEmailVerification,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
 


export const  AuthorContext = createContext();
 const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const  [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const providerLogIn = (provider) => {
        setLoading(true);
        return  signInWithPopup(auth, provider);
    }
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSingIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const upDateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const emailVerify =() => {
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           if(currentUser=== null || currentUser.emailVerified){
            setUser(currentUser);
           }
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    },[])
  
    const authInfo = {
        user,
        providerLogIn,
        upDateProfile,
        emailVerify,
        logOut,
        loading,
        createUser,
        userSingIn,
         
    }
    return (
        <div>
            <AuthorContext.Provider value={ authInfo }>
                {children}
            </AuthorContext.Provider>
        </div>
    );
};

export default AuthProvider; 