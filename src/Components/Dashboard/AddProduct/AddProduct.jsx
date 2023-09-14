import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    // const imageHostingKey = process.env.REACT_APP_imgbb_key;

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    // console.log(date);

    const handleSubmit=event=>{
        event.preventDefault()
        const form = event.target;
        const brandName = form.brandName.value;
        const image = form.image.files[0]
        const sellerName = form.sellerName.value;
        const location = form.location.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const yearUsed = form.yearUsed.value;
        const description = form.description.value;
        const category = form.category.value;
        const condition = form.condition.value;
        
         console.log(brandName,
            image,
            sellerName,
            location,
            resale_price,
            original_price,
            category,
            description,
            condition,
            date, yearUsed);

        
         
        const formData = new FormData()
        formData.append('image',image)
        const url = 'https://api.imgbb.com/1/upload?key=dc80d15667630dfb08a0c16646689fce'
        fetch(url,{
           method: "POST",
           body: formData
   
        })
        .then(res=> res.json())
        .then(imgData=> {
            console.log(imgData)
            if(imgData.success){

                const newData={
                    name: brandName,
                    img: imgData.data.url,
                    sellerName,
                    location,
                    resale_price,
                    original_price,
                    category,
                    description,
                    userEmail: user.email,
                    condition,
                    date, yearUsed
                }
               console.log(newData)
                    fetch(`https://mobile-market-server-salmatonka.vercel.app/usedPhones`,{
                        method: "POST",
                        headers:{
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newData)
                    })
                    .then(res=> res.json())
                    .then(data=> {
                        console.log(data)
                        toast.success('product added')
                        navigate('/dashboard/myProducts')

                    })
                
            }

        })

    }
    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 px-14'>
        <div className='flex mb-12 mt-5'>
      <div className='shadow-xl p-10 border border-2'>
          <h3 className='text-3xl text-bold text-center'>Please Add Product</h3>
          <form onSubmit={handleSubmit}>
           <div className='md:flex gap-10'>
                 {/* left side  */}
             <div className='md:w-1/2 '>
             <div className="form-control w-full">
                  <label className="label"> <span className="label-text">BrandName</span></label>
                  <input name='brandName' type='text' className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Picture</span></label>
                  <input name='image' type='file' className="file-input file-input-bordered file-input-info w-full" required />
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">SellerName</span></label>
                  <input disabled defaultValue={user?.displayName} name='sellerName' type='text' className="input input-bordered w-full" required/>
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Location</span></label>
                  <input name='location' type='text' className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Category</span></label>
                  <select required name='category' className="select select-bordered w-full"> 
                       <option value='Samsung'>Samsung</option>
                       <option value='iphone'>iphone</option>
                       <option value='Oppo'>Acer</option>
                       <option value='Redmi'>Redmi</option>
                       <option value='Huawei'>Huawei</option>
                       <option value='Vivo'>Vivo</option>
                       <option value='Apple'>Apple</option>
                  </select>
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">condition</span></label>
                  <select required name='condition' className="select select-bordered w-full"> 
                       <option>Excellent</option>
                       <option>Good</option>
                       <option>Fair</option>
                  </select>
              </div>
             </div>
             {/* Right side  */}
             <div className='md:w-1/2'>
             <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Resale Price</span></label>
                  <input name='resale_price' type='text' className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">OriginalPrice</span></label>
                  <input name='original_price' type='text' className="input input-bordered w-full" required/>
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Email</span></label>
                  <input disabled defaultValue={user.email} name='email' type='email' className="input input-bordered w-full"/>
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Years of Use</span></label>
                  <input name='yearUsed' type='text' className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-full">
                  <label className="label"> <span className="label-text">Description</span></label>
                  <textarea  name='description' type='text' className="input input-bordered w-full h-32" required />
              </div>
            
             </div>
           </div>
             
              <input className='btn btn-primary text-white w-full mt-5' type="submit" value='Add new product'/>
     
          </form>
         

      </div>
  </div>
    </div>
    );
};

export default AddProduct;