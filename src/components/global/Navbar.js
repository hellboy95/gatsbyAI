import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.png'



export default class Navbar extends Component {

state ={
    navbarOpen: false,
    css:'collapse navbar-collapse',
    links:[
        {
            id:1,
            path:'/',
            text:'Home'
        },
        {
            id:2,
            path:'/about',
            text:'About'
        },
        {
            id:3,
            path:'/Product',
            text:'Product'
        },
        {
            id:4,
            path:'/Infra',
            text:'Infrastructure'
        },
        {
            id:5,
            path:'/contact',
            text:'Contact'
        },
    ]

};

navbarHandler = () => {
    this.state.navbarOpen?this.setState({navbarOpen:false,css:"collapse navbar-collapse"}):this.setState({navbarOpen:true,css:"collapse navbar-collapse show"});
};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light ">  
                <Link to="/" className="navbar brand" >
                    <img src={logo} alt="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav">
                        {
                            this.state.links.map( link =>{
                                return(
                                    <li key={link.id} className="nav-item px-5">
                                        <Link to={link.path} className="nav-link text-uppercase text-dark">
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </nav>
        )
    }
}
