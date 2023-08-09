import { IProduct } from '@/app/interfaces/IProduct'
import React from 'react'

type Props = {
    product: IProduct
}

const ListViewProduct: React.FC<Props> = ({ product }) => {
  return (
    <>
    <div className='flex'>
        <div className='group relative w-40'>
            <img
                className="hover:bg-opacity-60 transition duration-500 bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 object-fill"
                src={product.image}
                alt="sofa-2"
            />
          
            <div className="absolute h-full w-full bg-white/80 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="p-3 px-5 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm">Buy Now</button>
            </div>
        </div>
        <div className='flex-auto ml-5'>
            <div className='flex items-center justify-between'>
                <h6 className='font-semibold'>{product.title}</h6>
                <h6 className='font-semibold'>${product.price}</h6>
            </div>
            <p className='text-gray-500'>{product.category}</p>
        </div>
    </div>
    <hr className='my-5'/>
    </>
  )
}

export default ListViewProduct