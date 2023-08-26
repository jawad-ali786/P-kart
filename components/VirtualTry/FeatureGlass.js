import React, {useRef, useState ,  useEffect} from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import './virtual.css'
import { useNavigate } from 'react-router-dom';




const glasses = [
    {
        id: '12321231231313131',
        name: 'Ray-Ban Clubmaster RB3016 - 120678 Polarized Sunglasses',
        image: 'https://m.media-amazon.com/images/I/51nAK+UQ7QL._AC_UL1500_.jpg',
        rating: 0,
        category: 'Glasses',
        numberReviews: 0,
        price: 1000,
        countInStock: 10,
        sku : 'rayban_clubmaster_noir_bleuGris'

    },
    {
        id: '12312364564564',
        name: 'Ray-Ban RB3136 Caravan Square Sunglasses',
        image: 'https://m.media-amazon.com/images/I/51MPOvEjLCL._AC_UL1500_.jpg',
        rating: 0,
        category: 'Glasses',
        numberReviews: 0,
        price: 1000,
        countInStock: 10,
        sku : 'rayban_caravan_bronze_cuivre_lilas_mirroir'

    },
    {
        id: '54423132176546',
        name: 'Ray-Ban Unisex RB3136 Caravan 5515 004 Sunglasses, Gunmetal White/Green G-15xlt, 55 mm',
        image: 'https://m.media-amazon.com/images/I/51MPOvEjLCL._AC_UL1500_.jpg',
        rating: 0,
        category: 'Glasses',
        numberReviews: 0,
        price: 1000,
        countInStock: 10,
        sku : 'rayban_caravan_gun_vert_classique_2'

    }
]

const FeatureGlass = (prop) => {
    const refChangeModel = useRef();
    const params = useParams();
    const [sku, setSku] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fadeUp = {
        initial: { x: 30, opacity: 0 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
        },
    };
 
        if(sku === 'rayban_caravan_gun_vert_classique_2'){
            navigate(`/tryon/${sku}`)
        }
        else if(sku === 'rayban_caravan_bronze_cuivre_lilas_mirroir'){
            navigate(`/tryon/${sku}`)
        }
        else if(sku === 'rayban_clubmaster_noir_bleuGris' ){

            navigate(`/tryon/${sku}`)
        }
    return (
        glasses.map((product, i) => (
            <motion.div key={i}
                layout
                variants={fadeUp}
                initial='initial'
                animate='animate'
                className='flex flex-col justify-center mx-auto hover:shadow-xl border border-solid border-black-800  transition-shadow duration-500'
            >
               <div className='flex justify-end '>
                
     
               <div className='flex text-lg px-5 py-1 cursor-pointer mt-3  ml-3  bg-black text-white'
               onClick={() => setSku(`${product?.sku}`)}>
                    Virtual Try On
                </div >
           
                
                <div className='bg-red-200 w-10 mt-3 cursor-pointer'></div>
               </div>
                <Link to={`/product/${product?.id}`} className='flex-1'>
                    <div  >
                        <img className='h-64 w-80 object-contain mx-auto'
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
            
        )
        
        )
        
    );
}

export default FeatureGlass