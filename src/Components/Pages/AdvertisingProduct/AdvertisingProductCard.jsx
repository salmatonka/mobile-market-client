import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingProductCard = ({advertising}) => {
    const {_id,img,description,name,location,resale_price,sallerName,original_price,yearUsed}= advertising
    return (
        <div>
        <div className="rounded-md shadow-md sm:w-96 hover:shadow-2xl text-gray-800 border-2 border-blue-200">

	<img src={img} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
	<div className="p-3 border-2 bg-cyan-50">

		<div className="flex flex-wrap items-center pt-3 pb-3">
    <h2 className="card-title text-black">{name}</h2>
          <p>{description?.slice(0,70)}...</p>
		</div>
		<div className="space-y-3">
    <div className='flex justify-between'>
            <h3 className='text-xl font-bold text-blue-600'>Discount Price: ৳ {resale_price} </h3>
            <h3 className='text-xl'> ৳ <s>{original_price}</s> </h3>
          </div>
          <div className='flex justify-between'>
          <p>Location: <span className='text-blue-600'>{location}</span> </p>
            <p>Use: {yearUsed} Years</p>
          </div>
         
          <div className="">
            <Link className="btn bg-[#1159AB] border-none hover:bg-cyan-700 font-bold text-white w-full"to={`/productDetail/${_id}`}>View Details</Link>
          </div>
		</div>
	</div>
</div>
       
       </div>
    );
};

export default AdvertisingProductCard;