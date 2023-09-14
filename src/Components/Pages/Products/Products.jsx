import React, { useState, useEffect }  from 'react';
import ProductCart from './ProductCart';

const Products = () => {
     const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://mobile-market-server-salmatonka.vercel.app/allPhones')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
   
   
//    console.log(allProducts)
    return (
        <div className="bg-gradient-to-tr to-purple-100 from-cyan-100 ">
        <div className='py-10 px-14'>
       {/* {
          allProducts.length
        } */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
         allProducts.map( allProduct =><ProductCart
          key={allProduct}
          allProduct ={allProduct}
         ></ProductCart>)
        }
        </div>
     </div>
     </div>
    );
};

export default Products;