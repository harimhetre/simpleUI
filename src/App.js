import React, { Component } from 'react';
import './App.css';
import ProductInfo from './Components/ProductInfo/ProductInfo.js';
import Product from './Components/Product/Product';
import Reviews from './Components/Reviews/Reviews';


class App extends Component {
  constructor () {
    super();
    this.state = {
      domain : "",
      catagory: "",
      productId: "",
      imageUrl: "",
      price: "",
      topScore: [],
      totalReviews: "",

    }
  }

  componentDidMount () {
     fetch('http://www.json-generator.com/api/json/get/bUINIBmBea?indent=2')
    .then((res) => res.json())
    .then((result) => {
       const data = result;
       this.setState({
         domain:data.domain,
         catagory:data.sourceCategory,
         productId:data.product_id,
         imageUrl:data.imageUrl,
         price:data.price,
         topScore:data.topScores,
         totalReviews: data.reviewCount
        });
    })
    
  }

  render() {
    const { domain, catagory, productId, imageUrl, price, topScore, totalReviews } = this.state;
    return (
      <div className="App">
        <ProductInfo domain = {domain} catagory={ catagory } productId = { productId } />
        <Product imageUrl={imageUrl} price={price} />
        <Reviews topScore={topScore} totalReviews={totalReviews} />
      </div>
    );
  }
}

export default App;
