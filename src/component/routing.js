import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/home'
import Header from './header';
import Footer from './footer';
import UserForm from '../container/courseEnqForm'
import UserDoubtsForm from '../container/userEnquries'



const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/enquiries/:id" component={UserForm}/>
            <Route path="/userdoubts" component={UserDoubtsForm}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing 