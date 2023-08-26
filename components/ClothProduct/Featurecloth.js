import React from 'react'
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
import Rating from "../Rating"
import toast from 'react-hot-toast';
import { useDispatch  } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';


const clothProduct = [
    {
      id: '638f6c233215c95c4401422d',
      name: "Generation COLORS OF DAGESTAN BANDHANI SUIT",
      countInStock: 10,
      category: "clothe",
      image: "https://res.cloudinary.com/df6uhxehr/image/upload/v1672608347/products/a21c7348_black_1_1_eckfdt.jpg",
      rating: 0,
      numReviews: 0,
      price: 8698
  },
  {
      id: '638f6c233215c95c4401422e',
      name: "Generation I V Y PRINTED ROUND HEM KURTA",
      countInStock: 10,
      category: "clothe",
      image: "https://res.cloudinary.com/df6uhxehr/image/upload/v1672608346/products/w22w4440_green_1_cl1mtt.jpg",
      rating: 0,
      numReviews: 0,
      price: 4398
  },
  {
      id: '638f6c233215c95c4401422f', 
      name: "Generation PAINTERLY PRINTED KURTA",
      countInStock: 10,
      category: "clothe",
      image: "https://res.cloudinary.com/df6uhxehr/image/upload/v1672608348/products/w22w4406_beige_1_memkhi.jpg",
      rating: 0,
      numReviews: 0,
      price: 2298
  }
  ]


const Featurecloth = () => {
      const dispatch = useDispatch();

      const fadeUp = {
        initial: { x: 30, opacity: 0 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
        },
      }
  return (
    clothProduct.map((product , i ) => (
        <motion.div key={i}
    layout
    variants={fadeUp}
    initial='initial'
    animate='animate'
    className='flex flex-col justify-center mx-auto hover:shadow-xl border border-solid border-black-800  transition-shadow duration-500'
  >
    <Link to={`/product/${product?.id}`} className='flex-1'>
      <div  >
       <img className='h-64 w-80 object-cover mx-auto'
       src={product?.image}
       alt='product '
       />
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
          {product?.numReviews} reviews
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

export default Featurecloth