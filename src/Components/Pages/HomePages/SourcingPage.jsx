import React from 'react';

const SourcingPage = () => {
    return (
        <div className='py-10 bg-gradient-to-tr to-purple-100 from-cyan-100'>
        <section className='bg-gradient-to-tr to-purple-200 from-cyan-200 w-5/6 mx-auto rounded-lg shadow-2xl'>
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">New to sourcing on mMarket.com?</h3>
                <p className="mt-3 text-lg dark:text-gray-400">Find everything you need in one place. From finding ready-to-ship products or a partner to customize the product you want, all the way through to ensuring quality and shipping your order to its final destination.</p>
                <div className="mt-12 space-y-12">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Step 1:Find products and sellers</h4>
                            <p className="mt-2 dark:text-gray-400">With over 150,000 manufacturers, wholesalers, and distributors selling on the platform, you can find or create anything you’re looking for. You can work with sellers to create customized products , or find finished products that already exist that are Ready to Ship from the facility within 15 days of when you place the order.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Step 2:Connect with sellers</h4>
                            <p className="mt-2 dark:text-gray-400">Unlike other platforms, you can speak one-on-one with sellers on mMarket.com to customize your order, negotiate prices or learn more about their business. Once you’ve created a short list of sellers, it’s time to reach out.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Step 3:Place and protect your order</h4>
                            <p className="mt-2 dark:text-gray-400">When possible, place orders using mMarket.com Trade Assurance for order protection. Look for the Trade Assurance iconon product listing pages, or ask your seller if it’s offered. Adhere to all Trade Assurance rules , including messaging within the Message Center instead of third-party apps.
</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img src='https://raw.githubusercontent.com/salmatonka/mMarket.com-repo/main/src/assets/images/siegrist-nikolai-jLFaHigDOYg-unsplash.jpg' alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
        </div>
    </div>

</section>
    </div>
    );
};

export default SourcingPage;