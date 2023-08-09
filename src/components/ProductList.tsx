'use client';
import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import Product from './Product';
import { IProduct } from '@/app/interfaces/IProduct';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import ListViewProduct from './ListviewProduct';



export default function ProductList() {

    const [productList, setProductList] = React.useState([]);
    const [limit, setLimit] = React.useState(10);
    const [view, setView] = React.useState("grid");


    const fetchProducts = async (sort: string) => {
        
        try {
            const res = await axios.get(`https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`);
            setProductList(res.data);
        } catch (err) {
            console.log(err);
        }

    }

    React.useEffect(() => {
        fetchProducts("asc");
    }, []);

    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            
            <button onClick={() => fetchProducts("asc")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <div className="flex items-center">
                        <ArrowsUpDownIcon className='w-6 h-6 mr-2'></ArrowsUpDownIcon>
                        Ascending
                    </div>
                </button>
                <button onClick={() =>  fetchProducts("desc")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <div className="flex items-center">
                        <ArrowsUpDownIcon className='w-6 h-6 mr-2'></ArrowsUpDownIcon>
                        Descending
                    </div>
                </button>

                <button onClick={() =>  setView("grid")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <div className="flex items-center">
                        <ArrowsUpDownIcon className='w-6 h-6 mr-2'></ArrowsUpDownIcon>
                        Grid View
                    </div>
                </button>
                <button onClick={() =>  setView("list")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <div className="flex items-center">
                        <ArrowsUpDownIcon className='w-6 h-6 mr-2'></ArrowsUpDownIcon>
                        List View
                    </div>
                </button>

          
                {
                    view == "grid" ?
                    <div className="mt-10 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
                        {
                            productList.map((product: IProduct) => <Product key={product.id} product={product} />)
                        }
                    </div>
                    :
                    <div className='my-5'>
                        {
                            productList.map((product: IProduct) => <ListViewProduct key={product.id} product={product} />)
                        }
                    </div>
                }
                <div className="flex justify-end items-end mt-12">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>Prev</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>Next</p>
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}

// export async function getServerSideProps() {
//     const res = await axios.get("https://fakestoreapi.com/products")
//     console.log(res.data);
//     const products: IProduct[] = res.data
//     return {
//         props: {
//             products,
//         },
//     }
// }


