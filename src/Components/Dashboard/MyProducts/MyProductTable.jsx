import React from 'react';
import { toast } from 'react-toastify';

const MyProductTable = ({myProduct}) => {
    const { name,advertising, img, resale_price, _id } = myProduct;


  const handleDeleteItem = id =>{
    const getPermission = window.confirm('Are you sure want to delete this product?')
  if(getPermission){
    fetch(`https://mobile-market-server-salmatonka.vercel.app/myProduct?id=${id}`,{
      method: "DELETE",

    })
    .then(res=> res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        console.log(data);
        toast.success('deleted success')
      }

    })
  }

  }

  const handleAdvertising = (id) => {
        fetch(`https://mobile-market-server-salmatonka.vercel.app/myProduct?id=${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Advertised success')
            }
            
        })
    
}

    return (
        <tr className="hover">
        <td>
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} alt='' />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{resale_price}</td>
        <td>
          <button onClick={()=> handleDeleteItem(_id)} className="btn btn-error btn-md">Delete</button>
        </td>
        <td>
          {
            advertising ?
            <button disabled className="btn btn-error btn-md">Advertising</button>
            :
            <button onClick={()=> handleAdvertising(_id)} className="btn btn-error btn-md">Advertising</button>
  
          }
        </td>
      </tr>
    );
};

export default MyProductTable;