import React, { useEffect, useState } from 'react';
import './ProductDetails.css'
import { Link } from 'react-router-dom';


const ProductDetails = () =>{
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const savedItem = localStorage.getItem('selectedProduct');
    if (savedItem) {
      setSelectedProduct(JSON.parse(savedItem));
    }
  }, []);


  return (
    <div className='details__parent'>
      {selectedProduct && (
        <div className='details__main'>
          <h2 className='details__heading'>{selectedProduct.category}</h2>
          <img src={selectedProduct.src}/>
          <p className='details__para' >{selectedProduct.desc}</p>
          <Link to='/products'><button className='btn btn-primary'> Go Back</button></Link>
        </div>
      )}
    
    </div>
  );
}


export default ProductDetails
