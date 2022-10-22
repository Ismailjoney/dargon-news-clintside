import { getAuth,onAuthStateChanged,signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
 


export const  AuthorContext = createContext();
 const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const  [user, setUser] = useState(null)


    const providerLogIn = (provider) => {
        return  signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    },[])
  
    const authInfo = {user,providerLogIn}
    return (
        <div>
            <AuthorContext.Provider value={ authInfo }>
                {children}
            </AuthorContext.Provider>
        </div>
    );
};

export default AuthProvider; 