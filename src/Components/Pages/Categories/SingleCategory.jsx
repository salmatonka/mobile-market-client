import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryCard from './SingleCategoryCard';
const SingleCategory = () => {
    const singleCategories = useLoaderData();
    console.log(singleCategories)
    return (
        <div className='pb-20 pt-40 bg-gradient-to-tr to-purple-100 from-cyan-100'>
        {/* {
            singleCategories.length
        } */}
    <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 '>
    {
        singleCategories.map(singleCategory=><SingleCategoryCard
        key={singleCategory._id}
        singleCategory={singleCategory}
        ></SingleCategoryCard> )
     }
    </div>
    </div>
    );
};

export default SingleCategory;