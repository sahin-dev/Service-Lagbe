import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {serviceListReducer,serviceDetailsReducer, serviceDeleteReducer, serviceCreateReducer} from './reducers/serviceReducers'
import {cartReducer} from './reducers/cartReducers'
import { userLoginReducer} from './reducers/userReducers'
import { userRegisterReducer, userDetailsReducer, userUpdateProfileReducer,userListReducer, userDeleteReducer, userUpdateReducer} from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers'


const reducer = combineReducers({
    serviceList:serviceListReducer,
    serviceDetails:serviceDetailsReducer,
    serviceDelete: serviceDeleteReducer,
    serviceCreate: serviceCreateReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate : orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage,  shippingAddress: shippingAddressFromStorage, paymentMethod: paymentMethodFromStorage},
    userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store