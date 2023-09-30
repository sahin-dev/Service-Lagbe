import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {PayPalButton} from 'react-paypal-button-v2'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getOrderDetails, payOrder} from '../actions/orderActions'
import {ORDER_PAY_RESET} from '../constants/orderConstants'
import axios from 'axios'

const HireScreen = ({ match }) => {
return(<h3>Hire Screen</h3>)
}

export default HireScreen
