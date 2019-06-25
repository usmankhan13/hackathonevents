import React,{Component} from 'react';
import  {BrowserRouter,Route} from 'react-router-dom' 

//components
import SignIn from '../SignIn/Signin'
import SignUp from '../SignUp/SignUp'
import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'


class CustomRoutes extends Component{

    render(){
        return(
            <BrowserRouter>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/admin" component={Dashboard}/>
            <Route exact path="/admin" component={Dashboard}/>
            <Route exact path="/privacy" component={PrivacyPolicy}/>
            <Route exact path="/" component={Home}/>
            </BrowserRouter>
        )
    }
}

export default CustomRoutes;