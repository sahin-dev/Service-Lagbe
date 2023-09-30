import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ServiceScreen from './screens/ServiceScreen'
import LoginScreen from './screens/LoginScreen'
import WorkerRegisterScreen from './screens/WorkerRegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import PaymentScreen from './screens/PaymentScreen'
import HireScreen from './screens/HireScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ServiceListScreen from './screens/ServiceListScreen'
import ServiceEditScreen from './screens/ServiceEditScreen'
import CartScreen from './screens/CartScreen'


function App() {
  return (
  
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
       
        <Route path='/hire/:id' component={HireScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/login' component={LoginScreen} />
        {/* <Route path='hirer/register' component={HirerRegisterScreen} /> */}
        <Route path='/register' component={WorkerRegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/service/:id' component={ServiceScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/service/:id/edit' component={ServiceEditScreen} />
        <Route path='/admin/servicelist' component={ServiceListScreen} />
        <Route path='/' component={HomeScreen} exact />
        
      </Container>
    </main>
    <Footer />
    </Router>
    
  );
}

export default App;
