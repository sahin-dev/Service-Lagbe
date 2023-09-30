import axios from 'axios'
import {SERVICE_LIST_REQUEST,SERVICE_LIST_SUCCESS,SERVICE_LIST_FAIL, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS, SERVICE_DETAILS_FAIL, SERVICE_DELETE_REQUEST, SERVICE_DELETE_SUCCESS,SERVICE_DELETE_FAIL, SERVICE_CREATE_REQUEST, SERVICE_CREATE_SUCCESS, SERVICE_CREATE_FAIL, } from '../constants/serviceConstants'


export const listServices = () => async (dispatch) => {

    try {

        dispatch({type:SERVICE_LIST_REQUEST})

        const {data} = await axios.get('/api/services')

        dispatch({
            type:SERVICE_LIST_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:SERVICE_LIST_FAIL,
            paload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listServiceDetails = (id) => async (dispatch) => {

    try {

        dispatch({type:SERVICE_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/services/${id}`)

        dispatch({
            type:SERVICE_DETAILS_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:SERVICE_DETAILS_FAIL,
            paload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteService = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: SERVICE_DELETE_REQUEST
        })

        const {userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                 Authorization: `Bearer ${userInfo.token}`,
            }
        }

        await axios.delete(`/api/services/${id}`, config)

        dispatch({
            type: SERVICE_DELETE_SUCCESS,
        })
        
        
    }catch (error) {
         dispatch({
            type: SERVICE_DELETE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

    export const createService = () => async (dispatch, getState) => {
        try{
            dispatch({ type: SERVICE_CREATE_REQUEST})

            const {userLogin: { userInfo }} = getState()

            const config = {
                headers: {
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
            const {data} = await axios.post('/api/services',{},config)
            dispatch({
                type:SERVICE_CREATE_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
            type: SERVICE_CREATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
        }
    }