import React from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md='9'>
                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/09/2e/22/21.jpg'
                                alt='good trip'
                            />
                            <Media.Body>
                                <h5>It is a good trip</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facilis
                                    incidunt nostrum reiciendis similique, voluptatem. Minus quasi quos soluta
                                    voluptatibus.</p>
                            </Media.Body>
                        </Media>

                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/09/2e/22/21.jpg'
                                alt='good trip'
                            />
                            <Media.Body>
                                <h5>It is a good trip</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facilis
                                    incidunt nostrum reiciendis similique, voluptatem. Minus quasi quos soluta
                                    voluptatibus.</p>
                            </Media.Body>
                        </Media>

                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/09/2e/22/21.jpg'
                                alt='good trip'
                            />
                            <Media.Body>
                                <h5>It is a good trip</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facilis
                                    incidunt nostrum reiciendis similique, voluptatem. Minus quasi quos soluta
                                    voluptatibus.</p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md='3'>
                        <h5 className='text-center mt-5'>Description</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Html</ListGroup.Item>
                                <ListGroup.Item>Css</ListGroup.Item>
                                <ListGroup.Item>Java Script</ListGroup.Item>
                                <ListGroup.Item>Node Js</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className='mt-2' bg='light'>
                            <Card.Body>
                                <Card.Title>Html viget</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                                    tenetur.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Blog;