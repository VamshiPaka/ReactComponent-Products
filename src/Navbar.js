import React,{Component} from 'react';
import './Navbar.css'

class Navbar extends Component{
    render(){
        return (<header>
            <h2><a>Vamshi App</a></h2>
            <nav>
                <li><a>Add Product</a></li>
                <li><a>Home</a></li>
                <li><a>Signin</a></li>
                <li><a>Signup</a></li>
            </nav>
        </header>);
    }
}

export default Navbar;