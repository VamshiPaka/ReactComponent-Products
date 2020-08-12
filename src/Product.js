import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Product.css'

class Product extends Component{
    static propTypes={
        title:PropTypes.string.isRequired,
        features:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired
    }
    render(){
        const {title,img,price}=this.props;
        const features= this.props.features.map((feature,index)=>(<li key={index}>{feature}</li>))
        return(
            <div className="product-card">
                <div className="product-card-image"><img src={img} alt={title} /></div>
            <div className="product-card-content">
                <h3 className="product-title">{title}</h3>
                <h4>Features:</h4>
                <ul>{features}</ul>
                <h4>Price:</h4>
                <p>{price}</p>
            </div>
        </div>
        );
    }
} 

export default Product;