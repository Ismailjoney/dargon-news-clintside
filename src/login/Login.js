import  { toast } from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    
    const {userSingIn} = useContext(AuthorContext)
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleSingIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSingIn(email,password)
        .then(res => {
            const user = res.user;
            console.log(user)
            if(user.emailVerified){
                navigate(from, {replace: true})
            }
            else{
                toast.error('please verify your email')
            }
          
            setError('')
            form.reset()
        })
        .catch(err => {
             setError(err.message)
            })

    }


    return (
        <div>
            <h2>Login page</h2>
            <Form onSubmit={handleSingIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;