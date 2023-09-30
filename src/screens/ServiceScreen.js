import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listServiceDetails } from '../actions/serviceActions'
import { getUserDetails } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ServiceScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const serviceDetails = useSelector(state => state.serviceDetails)
    const userDetails = useSelector(state => state.userDetails)

    const { loading, error, service } = serviceDetails
    const { uLoading, uError, user } = userDetails

    useEffect(() => {
        dispatch(listServiceDetails(match.params.id))
        dispatch(getUserDetails(service.user))

    }, [dispatch, match, service])

    const hireHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <> <Row>
                <Col md={6}>
                    <Image src={service.image} alt={service.name} fluid />
                </Col>
                <Col md={6} >
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{service.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={service.rating} text={`${service.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price Starting From: {service.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {service.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                    <Form.Control
                                        as='input'
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}>
                                            
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={hireHandler} className='hire-btn' type='button'>
                                Hire Service
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

            </Row>
                <Row>
                    <Col md={6}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            <h3>About the Worker</h3>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            <Image src={service.image} rounded fluid />
                                        </Col>
                                        <Col>

                                            <Row>
                                                <Col as="h4">{user?.name}</Col>

                                            </Row>
                                            <Row>
                                                <Col>Rating(Number of Reviews)</Col>
                                            </Row>
                                            <Row>
                                                <Col>Dhaka, BD</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col as='h4'>User Description</Col>
                                        <Row>
                                            <Col>Short Description</Col>

                                        </Row>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>

                                        <Col>
                                            <Button className='contact-btn' type='button' >
                                                Contact with me
                                            </Button>
                                        </Col>

                                    </Row>

                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                </Row></>}


        </>
    )
}

export default ServiceScreen
