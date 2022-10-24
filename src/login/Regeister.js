
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../Context/AuthProvider/AuthProvider';

const Regeister = () => {

    const { createUser, upDateProfile, emailVerify } = useContext(AuthorContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false);


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURl = form.photoURl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURl, email, password);
        createUser(email, password)
            .then(resualt => {
                const user = resualt.user;
                navigate('/')
                setError('')
                form.reset()
                upDateUserProfile(name, photoURl)
                handleEmailVerify();
                toast.success(`please verify your email before log in`)


            })
            .catch(error => {
                console.error(error.message)
                setError(error.message);
            })
    }

    const upDateUserProfile = (name, photoURl) => {
        const profile = {
            displayName: name,
            photoURL: photoURl,
        }
        upDateProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const handleEmailVerify = () => {
        emailVerify()
            .then(() => { })
            .catch(erroe => console.error(error))
    }
    return (
        <div>
            <h2>Regester page</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURl" type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Check <Link to='/termsAndCondition'>tearms and condition</Link></>} />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Regiester
                </Button>
            </Form>

        </div>
    );
};

export default Regeister;