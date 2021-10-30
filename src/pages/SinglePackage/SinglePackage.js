import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SinglePackage = (props) => {
    console.log(props);
    const { name, description, img, duration, groupSize, _id } = props.package;
    return (
        <>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <i className="bi bi-calendar me-2"></i>{duration}
                            <i className="bi bi-people-fill mx-2"></i>{groupSize}
                        </Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    
                        <Link to={`/booking/${_id}`}><Button variant="outline-danger" className="ms-3 mb-4">Book Now</Button></Link>
                    
                </Card>
            </Col>
        </>
    );
};

export default SinglePackage;