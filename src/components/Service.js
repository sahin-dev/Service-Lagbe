import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Service = ({service}) => {
    return (
        <Card className='my-3 p-3 rounded'>

        <Link to={`/service/${service._id}`}>
            <Card.Img src={service.image} variand="top" />
        </Link>
        <Card.Body>
            <Link to={`/service/${service._id}`}>
            <Card.Title as='div'>
            <strong>{service.name}</strong>
            </Card.Title>
        </Link>
        <Card.Text as='div'>
            <Rating value={service.rating} text={`${service.numReviews} reviews`} ></Rating>
        </Card.Text>
        {/* <Card.Text as='div'> {service.rating}({service.numReviews})</Card.Text> */}
        <Card.Text as='h4'>
            From ${service.price}
        </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Service
