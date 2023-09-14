import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsLayoutSplit, BsLayoutThreeColumns, IconName } from "react-icons/bs";
import AdvertisingProductCard from './AdvertisingProductCard';

const AdvertisingProduct = () => {
    const [myGrid , setMyGrid] = useState(false)
    const handleGrid = () => {
        console.log("text");
        setMyGrid(!myGrid)
        
    }
    const {data: advertisings = [] , refetch , isLoading} = useQuery({
        queryKey: ['advertisings'],
        queryFn:async()=>{
            const res = await fetch(`https://mobile-market-server-salmatonka.vercel.app/advertisingProduct`)
            const data = await res.json()
            return data;
        }
    })
    console.log(advertisings)
    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 px-14 max-w-[1240px] mx-auto pt-20'>
            
            <h3 className='text-center text-3xl font-bold text-blue-600 pt-14'>ADVERTISING</h3>
            
            
            <div className='flex justify-end my-5'>
            <button onClick={handleGrid} className="btn bg-green-500 text-white text-xl border-none"> {myGrid ? <BsLayoutThreeColumns></BsLayoutThreeColumns> : <BsLayoutSplit></BsLayoutSplit>} <span className='ml-3'>Layout</span> </button>
            </div>
            
          <div className='flex justify-center'>
          <div className={myGrid ? "grid md:grid-cols-3 gap-10 grid-cols-1  py-24 " : "grid md:grid-cols-2 gap-10 grid-cols-1  py-24 "}>
           {
                advertisings?.map(advertising=> <AdvertisingProductCard
                key={advertising._id}
                advertising={advertising}
                
                ></AdvertisingProductCard>)
            }
           </div>
          </div>
        </div>
    );
};

export default AdvertisingProduct;