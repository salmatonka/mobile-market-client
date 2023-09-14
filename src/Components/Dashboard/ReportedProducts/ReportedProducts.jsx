import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedProducts = () => {
    const {data: allReports = [], refetch, isLoading} = useQuery({
        queryKey: ['allReports'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-market-server-salmatonka.vercel.app/allReported`);
            const data = await res.json();
            return data;
        }
    })
    console.log(allReports)
    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 px-14'>
         <h3 className='text-3xl text-bold pb-6 text-center'>Reported Product</h3>
        <div className="overflow-x-auto">
<table className="table w-full">

<thead>
  <tr>
    <th>Picture</th>
    <th>Product Name</th>
    <th>Seller Name</th>
  </tr>
</thead>
<tbody>
    {
        allReports.map(allReport =>   <tr key={allReport._id} className="hover">
            
            <td>
            <div className="avatar">
                 <div className="w-24 rounded">
                     <img src={allReport.img} alt=''/>
                 </div>
             </div>
             </td>
            <td>{allReport.name}</td>
            <td>{allReport.sellerName}</td>
           
          </tr>)
    }
</tbody>
</table>
</div>
    </div>
    );
};

export default ReportedProducts;