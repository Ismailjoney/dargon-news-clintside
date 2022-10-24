import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../../Context/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
   const {user,loading} = useContext(AuthorContext)
   const location =  useLocation()

   if(loading){
    return <Button variant="primary" disabled>
    <Spinner
    className=''
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
     
    />
  </Button>
   }

   if(!user){
    return <Navigate to='/login' state ={{from : location}} replace></Navigate>
   }
   else{
    return children;
   }
};

export default PrivetRoute;