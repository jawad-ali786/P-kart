import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Modelview from '../ModelViewer/modelview';
import Rating from '../Rating';
import toast from 'react-hot-toast';
import { useDispatch  } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const modelList = [
  {
    id:'639a3dc523a2920d95778a71',
    name: 'Price Chair',
    modelurl: 'https://res.cloudinary.com/df6uhxehr/image/upload/v1671052578/3D%20MODEL/ar2_bzh11b.glb',
    image: 'https://res.cloudinary.com/df6uhxehr/image/upload/v1671052696/products/uarh1v0ozcl9n1ovwsu3.jpg',
    rating: 0,
    category: 'Furniture',
    numberReviews: 0,
    price: 1000,
    countInStock: 10

  },
  {
    id:'639a3d8b23a2920d95778a6a',
    name: 'Desk Daraz',
    modelurl: 'https://res.cloudinary.com/df6uhxehr/image/upload/v1671052566/3D%20MODEL/ar1_tq7keu.glb',
    image: 'https://res.cloudinary.com/df6uhxehr/image/upload/v1671052636/products/oxdtixenukcxrn3s77zv.jpg',
    rating: 0,
    category: 'Furniture',
    numberReviews: 0,
    price: 10000,
    countInStock: 10

  },
  {
    id:'639a3cc323a2920d95778a63',
    name: '2x2 Sofa Set',
    modelurl: 'https://res.cloudinary.com/df6uhxehr/image/upload/v1671052378/3D%20MODEL/sofa1_ln4bwi.glb',
    image: 'https://res.cloudinary.com/df6uhxehr/image/upload/v1671052443/products/mrlug31qrccqfluul8wv.jpg',
    rating: 0,
    category: 'Furniture',
    numberReviews: 0,
    price: 15000,
    countInStock: 10

  }
]


const FeatureModel = () => {

  const dispatch = useDispatch();


  const fadeUp = {
    initial: { x: 30, opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };



  return (
    
      modelList.map((product , i ) => (
        <motion.div key={i}
        layout
        variants={fadeUp}
        initial='initial'
        animate='animate'
        className='flex flex-col justify-center mx-auto hover:shadow-xl border border-solid border-black-800  transition-shadow duration-500'
      >
        
        <Link to={`/product/${product?.id}`} className='flex-1'>
          <div  >
              <Modelview url={product?.modelurl} photo={product?.image} />
          </div>
        </Link>
        <div className='px-5 py-3'>
          <div className='flex justify-between items-center'>
            <small className='text-gray-500'>{product?.category}</small>
            <Rating value={product?.rating} />
          </div>
          <div className='flex justify-between items-center'>
            <Link
              to={`/product/${product?.id}`}
              className='text-base text-gray-700 hover:underline flex-1'
            >
              {product?.name}
            </Link>
            <small className='text-gray-400 ml-2'>
              {product?.numberReviews} reviews
            </small>
          </div>
        </div>
        <div className='flex justify-between items-center px-5 py-3 border-t border-dotted'>
          <h3 className='text-base text-yellow-700'>Rs {product?.price}</h3>
          {product?.countInStock > 0 ? (
            <button
              className='text-blue-900 hover:underline focus:outline-none font-semibold flex items-center space-x-2'
              title='Add to cart'
              // disabled={product?.countInStock === 0}
              onClick={() => {
                if (product?.countInStock === 0) {
                  toast.error('Out of stock');
                } else {
                  dispatch(addToCart(product?.id, 1));
                  toast.success('Added to cart');
                }
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
              <small>Add to cart</small>
            </button>
          ) : (
            <span className='relative inline-block px-3 py-1 font-semibold text-red-800 leading-tight'>
              <span
                aria-hidden
                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
              ></span>
              <span className='relative text-xs'>Out of stock</span>
            </span>
          )}
        </div>
      </motion.div>
      ))
  )
}

export default FeatureModel