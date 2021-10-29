import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SinglePackage = (props) => {
    console.log(props);
    const { name, location, description, img, duration, groupSize, _id } = props.package;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        {/* <i className="bi bi-calendar me-2"></i>{duration}
                        <i className="bi bi-people-fill mx-2"></i>{groupSize} */}
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <i className="bi bi-calendar me-2"></i>{duration}
                            <i className="bi bi-people-fill mx-2"></i>{groupSize}
                        </Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}><Button variant="outline-danger">Book Now</Button></Link>
                    </Card.Body>
                    
                </Card>
            </Col>
        </>
    );
};

export default SinglePackage;