import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { FaCheck } from "react-icons/fa";
const ProductDetail = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
	
	const [productData, setProductData] = useState(null)
    const singleProductDetail = useLoaderData();
    const { _id, name, img,sellerName,report, userEmail , postedDate, resale_price, original_price, location, yearUsed

    } = singleProductDetail;
    // console.log(singleProductDetail)

    const handleProductBooking = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productName: name,
            buyer: username,
            email,
            phone,
            location,
            resale_price, original_price

		}	
		fetch(`https://mobile-market-server-salmatonka.vercel.app/booking`,{
			method: "POST",
			headers:{
				'content-type': 'application/json'
			},
			body: JSON.stringify(booking)	
		})
		.then(res=> res.json())
		.then(data=>{
			console.log(data)
            navigate('/dashboard')

		})
	};

    const handleReported = (id) =>{
          console.log(id)
        const permission = window.confirm(`Are you report ${name}`);
        if(permission){
          fetch(`https://mobile-market-server-salmatonka.vercel.app/usedPhones?id=${id}`, {
            method: "PUT"
          })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0){
              toast.success('Product reported')
              console.log(data);
              
            }
          })
        }

    }

    const [bluetic, setBluetic] = useState(null)


    useEffect(()=>{
        fetch(`https://mobile-market-server-salmatonka.vercel.app/users`)
        .then(res=> res.json())
        .then(data=> {
            setBluetic(data)
            
        })
    },[bluetic])

    return (

        
//             <section className="dark:bg-gray-800 dark:text-gray-100 pb-20 pt-40">
// 	<div className="container flex flex-col-reverse mx-auto lg:flex-row">

//     <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
// 			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
// 				<img src={img} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
// 			</div>
// 		</div>

// 		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
// 			<div className="flex space-x-2 sm:space-x-4">
				
// 				<div className="space-y-2">

// 					<p className="leadi">Posted Date:{postedDate}</p>
// 					<h2 className="text-4xl pt-2 font-semibold sm:text-3xl group-hover:underline group-focus:underline">{name}</h2>
               
//                     <p className="pt-4 text-xl">Details: {location}</p>
//                     <p className="pt-4 text-xl">Location: {location}</p>
//                         <p className=" text-xl">Resale Price: {resale_price}</p>
//                         <p className=" text-xl">OriginalPrice: {original_price}</p>
//                         <p className=" text-xl">Resale Price: {resale_price}</p>
//                         <p className=" text-xl">Year Used: {yearUsed}</p>

//  {/* Modal */}

//  <div className="md:flex justify-end">
//                     <label htmlFor="booking-modal" className="btn btn-primary mt-5 md:px-20 ">Book now</label>
//                     {/* The button to open modal */}

//                     {/* Put this part before </body> tag */}
//                     <input type="checkbox" id="booking-modal" className="modal-toggle" />
//                     <div className="modal">
//                         <div className="modal-box">

//                             <div>
//                                 <input type="checkbox" id="booking-modal" className="modal-toggle" />

//                                 <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">Booking for {name}</h3>
//                                 <form onSubmit={handleBooking}>
//                                     <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
//                                     <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
//                                     <div className='flex justify-between'>
//                                         <p className='badge badge-error'>Resale Price: ৳{resale_price}</p>
//                                     </div>
//                                     <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
//                                     <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
//                                     {
//                                         !user && <p>Please login to create a Booking</p>
//                                     }
//                                     <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
//                                         "btn btn-secondary w-full"
//                                         :
//                                         "btn btn-accent w-full btn-disabled"
//                                     } >
//                                     </input>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

// 				</div>
// 			</div>
			
// 		</div>
		
// 	</div>
// </section>

<section className="text-gray-800 bg-gradient-to-tr to-purple-100 from-cyan-100 pt-12">
<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    </div>
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold text-[#1159AB] mb-3 leading-none sm:text-6xl">{name}</h1>
        <hr />
        <p className="text-lg mt-5">"description"</p>
        <div className='md:flex justify-between'>
            <h3 className='text-xl font-bold text-blue-600'> Price: ৳ {resale_price}</h3>
            <h4> ৳<s>{original_price}</s> </h4>

        </div>
        <p>Date: {postedDate}</p>
        <p>Used time: {yearUsed} year</p>
        <p>Location: <span className='text-primary'>{location}</span> </p>
        <div className='p-3 shadow-xl md:flex items-center justify-between'>
        <div>
        <h2 className='text-xl text-secondary mr-2'>seller name: {sellerName} </h2>
              {
                bluetic?.map(blue=> <>
                {
                    blue.email === userEmail && blue.verified && <FaCheck className='text-blue-600'></FaCheck>
                }
                </>) 
              }
        </div>
             <div className=''>
           {
            report?
            <button disabled className='btn btn-error btn-sm text-white w-32'>Report</button>
            :
            <button onClick={()=>handleReported(_id)} className='btn btn-error btn-sm text-white w-32'>Report</button>
           }
             </div>
        </div>


        <label htmlFor='booking-modal' className="btn bg-[#1159AB] font-bold text-white mt-3">Book Now!</label>


        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label onClick={() => setProductData(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name} for </h3>
                <form onSubmit={handleProductBooking}>
                    <input name='name'  type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                    <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                    <div className='flex justify-between'>
                        <p>Price: ৳ {resale_price}</p>
                        <p> ৳ <s>{original_price}</s> </p>
                    </div>
                    <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                    <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
                    {
                        !user && <p>Please login</p>
                    }
                   <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
                        "btn bg-[#1159AB] w-full"
                        :
                        "btn btn-accent w-full btn-disabled"
                    } > 
                    </input>
                </form>
            </div>
        </div>
    </div>

    </div>

</div>
</section>

        
    );
};

export default ProductDetail;