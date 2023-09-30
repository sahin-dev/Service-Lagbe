
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FromContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listServiceDetails } from '../actions/serviceActions'

const ServiceEditScreen = ({ match, history }) => {
    const serviceId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const serviceDetails = useSelector(state => state.serviceDetails)
    const {loading, service, error} =  serviceDetails


    useEffect(() => {
            if(!service.name || service._id !== serviceId){
                dispatch(listServiceDetails(serviceId))
             }else{
                setName(service.name)
                setPrice(service.price)
                setImage(service.image)
                setBrand(service.brand)
                setCategory(service.category)
                setCountInStock(service.countInStock)
                setDescription(service.description)
                
             }
        },[service, dispatch, serviceId, history])

    const submitHandler = (e) => {
        e.preventDefault()


    }

    return (
        <>
            <Link to='/admin/servicelist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
            <h1>Edit SERVICE</h1>
            
            {loading ? <Loader />: error ? <Message variant='danger'> {error} </Message>:(
                <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name} onChange={ (e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='number' placeholder='Enter price' value={price} onChange={ (e) => setPrice(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='text' placeholder='Enter image url' value={image} onChange={ (e) => setImage(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='brand'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type='text' placeholder='Enter brand' value={brand} onChange={ (e) => setBrand(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='countInStock'>
                    <Form.Label>count In Stock</Form.Label>
                    <Form.Control type='number' placeholder='Enter countInStock' value={countInStock} onChange={ (e) => setCountInStock(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type='text' placeholder='Enter category' value={category} onChange={ (e) => setCategory(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder='Enter description' value={description} onChange={ (e) => setDescription(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Button type='submit' variant='primary'>Update</Button>

            </Form>
            )}
                  
        </FormContainer>
        </>
        
    )
}

export default ServiceEditScreen
