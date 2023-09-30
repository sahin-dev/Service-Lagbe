import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Service from '../components/Service'
import { listServices } from '../actions/serviceActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



const HomeScreen = () => {
    
    const dispatch = useDispatch()

    const serviceList = useSelector(state=>state.serviceList)
    const {loading, error, services} = serviceList

    useEffect(() => {
       dispatch(listServices())
    },[dispatch])


    return (
        <>
            <h1>Latest Services</h1>
            {loading ?
                (<Loader />)
                :error ? 
                (<Message variant='danger'>{error}</Message>)
                :(<Row> 
                { services.map(service=> (
                    <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
                         <Service service={service} />
                    </Col>
                )) }
            </Row>)}
            
        </>
    )
}

export default HomeScreen
