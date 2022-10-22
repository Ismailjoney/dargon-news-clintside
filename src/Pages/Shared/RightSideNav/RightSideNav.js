import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp,FaTwitter,FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosusol from '../BrandCarusol/BrandCarosusol';
import { AuthorContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
 


const RightSideNav = () => {

    const {providerLogIn} = useContext(AuthorContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogle = () => {
        providerLogIn(googleProvider)
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button  onClick={handleGoogle} variant="primary"> <FaGoogle></FaGoogle> Log in with Google</Button>
                <Button variant="dark"> <FaGithub></FaGithub> Log in with Github</Button>
            </ButtonGroup>

            <div className='mt-3'>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarosusol></BrandCarosusol>
        </div>
    )

};

export default RightSideNav;