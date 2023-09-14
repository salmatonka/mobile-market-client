import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyProductTable from './MyProductTable';

const MyProducts = () => {
    const {user} =useContext(AuthContext)
    console.log(user);

    const {data: myProducts = [] ,refetch, isLoading} = useQuery({
        queryKey:['myProducts'],
        queryFn: async()=>{
            const res = await fetch(`https://mobile-market-server-salmatonka.vercel.app/myProduct?email=${user?.email}`)
            const data = await res.json()
            return data;
        }

    })
    console.log(myProducts)
    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 px-14'>
        {/* <h2>product:{myProducts.length}</h2> */}
        <h3 className='text-3xl text-bold pb-6 text-center'>My Product</h3>
        <div className="overflow-x-auto ">
<table className="table w-full bg-gradient-to-tr to-purple-100 from-cyan-100 ">

<thead>
  <tr>
    <th></th>
    <th>Brand Name</th>
    <th>Price</th>
    <th>Remove</th>
    <th>Advertised</th>
  </tr>
</thead>
<tbody>
    {
        myProducts?.map(myProduct=> <MyProductTable
        key={myProduct._id}
        myProduct={myProduct}

        ></MyProductTable>)
    }
</tbody>
</table>
</div>
    </div>
    );
};

export default MyProducts;