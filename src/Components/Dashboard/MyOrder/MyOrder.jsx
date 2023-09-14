import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const MyOrder = () => {
    const { user } = useContext(AuthContext)

    
    const {data: myOrders = [], refetch , isLoading} = useQuery({
        queryKey:['myOrders'],
        queryFn: async()=>{
            const res = await fetch(`https://mobile-market-server-salmatonka.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    
    refetch();
    console.log(myOrders)

    const handleRemoveItem = (id)=>{

        fetch(`https://mobile-market-server-salmatonka.vercel.app/booking?id=${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
          toast.success('Product deleted!')
          refetch();
          }
        })
      
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders.map((myOrder, idx) => <tr key = { myOrder._id }
                            myOrder = {myOrder } >

                                <td>{myOrder.productName}</td>
                                <td>৳{myOrder.resale_price}</td>
                                <td>
                                    <button onClick={() => handleRemoveItem(myOrder._id)} className='btn btn-danger px-[18px] rounded-full'>X</button>
                                </td>
                                <td>
                                    <button className='btn btn-secondary px-6'>Pay</button>
                                </td>
                            </tr>
    
                              
                    )
}

                </tbody>
            </table>
        </div>
    </div >
    );
};

export default MyOrder;