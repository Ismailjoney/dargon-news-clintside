import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShare, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
    const {_id,title,author,details,image_url,total_view,rating} = news;
 
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                   roundedCircle
                   className='me-4'
                    src={author?.img}
                    style={{height: '60px'}}
                    >
                    </Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                       <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShare></FaShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                    details.length > 300 ? 
                    <p>{details.slice(0, 350) + '...'} <Link to={`/news/${_id}`}> Read more ..</Link> </p>
                    :
                    <p>{details}</p>
                    }
                </Card.Text>
            
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCart;