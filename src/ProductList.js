import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';

class ProductList extends Component{
    static defaultProps={
        products:[
            {title:"Samsung Galaxy S20",price:"97000",features:['AMOLED screen','6000mAh battery','5G mobile'],img:"samsung-galaxy-s20.jpeg"},
            {title:"Motorola-g8-power-lite",price:"10000",features:['Triple Cam','16+2+2MP','5000mAh'],img:"motorola-g8-power-lite.jpeg"},
            {title:"Samsung-galaxy-m11",price:"12000",features:['quad cam','Bezel less','Notchless'],img:"samsung-galaxy-m11.jpeg"},
            {title:"Realme-6",price:"15000",features:['4GB RAM','64GB ROM','4k Display'],img:"realme-6.jpeg"}]
    }

    static propTypes={
        products:PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const products=this.props.products.map((r,index)=>(<Product key={index} {...r} />));
    return (<div className="product-list">{products}</div>)
    }
}

export default ProductList;