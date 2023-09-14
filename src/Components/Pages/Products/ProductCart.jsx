import React from 'react';
import { Link } from 'react-router-dom';
const ProductCart = ({allProduct}) => {
    const {_id,name, img,original_price,postedDate,resale_price} = allProduct;
    // console.log(allProduct)
   
    return (
        <div>
        <div className="max-w-lg p-4 pb-8 bg-gradient-to-tr to-purple-200 from-cyan-200 shadow-2xl rounded-lg dark:text-gray-100 ">
            
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={img} alt="" className="block  object-center w-full bg-gray-100 rounded-md h-72 " />
                    <div className="flex items-center text-md px-6 py-4">
                        <span>Posted Date: {postedDate}</span>
                        
                    </div>
                </div>
                <div className="space-y-2 px-6">
                    <div  className="block">
                        <h2 className="text-3xl font-semibold pt-2 pb-4">{name}</h2>
                        <h4 className="text-xl font-semibold tb-2 ">Resale Price: {resale_price}</h4>
                        <h4 className="text-xl font-semibold pb-10">Original Price: {original_price}</h4>
                        
                    </div>			
                </div>
                
            </div>
            <Link className=' flex justify-center' to={`/productDetail/${_id}`}><button style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px"}} className='category-button bg-gradient-to-tr to-purple-400 from-cyan-300 w-full mx-6 py-3 rounded-lg'>Details</button></Link>
            
        </div>
        
            </div>
    );
};

export default ProductCart;