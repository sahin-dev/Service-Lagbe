import React, { useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Table, Button,Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listServices, deleteService, createService} from '../actions/serviceActions'
import { SERVICE_CREATE_RESET } from '../constants/serviceConstants'

const ServiceListScreen = ({history, match}) => {
    const dispatch = useDispatch()
    const serviceList = useSelector(state => state.serviceList)
    const {loading, services, error} = serviceList

    const serviceDelete = useSelector(state => state.serviceDelete)
    const {loading: loadingDelete, success, error: errorDelete} = serviceDelete

    const serviceCreate = useSelector(state => state.serviceCreate)
    const {loading: loadingCreate, success: successCreate, error: errorCreate, service: createdService} = serviceCreate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        dispatch({ type: SERVICE_CREATE_RESET})

        if(!userInfo.isAdmin){
             history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/service/${createdService._id}/edit`)
        }else{
            dispatch(listServices())
        }
        
    },[dispatch,history,userInfo, success, createdService, successCreate])

    const deleteHandler = (id) => {
        if(window.confirm("Are you sure?")){
            dispatch(deleteService(id))
        }
    }

    const createServiceHandler = () => {
      dispatch(createService())
    }

    return (
        <>
        <Row className='align-items-center'>
            <Col>
                <h1>Services</h1>
            </Col>
            <Col className='text-right'>
            <Button className='my-3' onClick={createServiceHandler}>
        <i className='fas fa-plus'></i> Create Product
            </Button>

            </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='red'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='red'>{errorCreate}</Message>}
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :(
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr>
                            <td>{service._id}</td>
                            <td>{service.name}</td>
                            <td>${service.price}</td>
                            <td> {service.category} </td>
                            <td>
                                <LinkContainer to={`/admin/service/${service._id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>
                                    </Button>
                                </LinkContainer>
                                <Button variant='danger' className='btn-sm' onClick={()=> deleteHandler(service._id)}>
                                    <i className='fas fa-trash'></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}
            
       </>
    )
}


export default ServiceListScreen
