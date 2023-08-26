import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Meta, Slider } from '../components';
import { useNavigate } from 'react-router-dom';
import Featurecloth from '../components/ClothProduct/Featurecloth';
import FeatureGlass from '../components/VirtualTry/FeatureGlass';
import { Avatar } from "@material-ui/core";
import "./Products.css";
import FeatureModel from '../components/ModelProduct/FeatureModel';




const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const keyword = params.keyword || '';
  const [pageNumber, setPageNumber] = useState(1);

  const { success: productCreated } = useSelector(state => state.productCreate);
  

  useEffect(() => {
 
  }, [dispatch, productCreated,  pageNumber, keyword , price  ]);

 

  const truckico = 'https://cdn-icons-png.flaticon.com/512/2851/2851424.png'
  const serico = 'https://cdn-icons-png.flaticon.com/512/6381/6381416.png'
  const quaico = 'https://cdn-icons-png.flaticon.com/512/5988/5988061.png'
  


  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
    
      <Meta />
      <Slider />

    {/* ------- Category Wise Filter ------  */}

      <div className='mt-10 flex relative justify-evenly items-center  bg-gray-50  cate rounded-lg'> 
      <div onClick={() => navigate('/cloth')} 
      className='mt-5 mb-5 hover:shadow-xl cursor-pointer  hover:bg-green-200  bg-green-100 rounded h-20 flex relative  items-center'>
            <Avatar
              style={{ width: "5vmax", height: "5vmax", margin: "2vmax 0"  }}
              src='https://cdn-icons-png.flaticon.com/512/4660/4660779.png'
              alt="truckico"
            />
      
      <div className='text-2xl  ml-2 mr-20'>   CLOTH</div>
      </div>
      <div onClick={() => navigate('/tryon')} className='mt-5 mb-5 cursor-pointer    hover:shadow-xl hover:bg-red-200 bg-red-100 rounded h-24 flex relative  items-center'>
            <Avatar
              style={{ width: "5vmax", height: "5vmax", margin: "2vmax 0" }}
              src='https://cdn-icons-png.flaticon.com/512/1646/1646550.png'
              alt="truckico"
            />
      
      <div className='text-2xl text-gray ml-2 mr-2'>  VIRTUAL TRY-ON</div>
      </div>
      <div onClick={() => navigate('/model')} 
      className='mt-5 mb-5 cursor-pointer  hover:shadow-xl hover:bg-blue-200 bg-blue-100 rounded h-20 flex relative  items-center'>
            <Avatar

              style={{ width: "5vmax", height: "5vmax", margin: "2vmax 0" }}
              src='https://cdn-icons-png.flaticon.com/512/2818/2818038.png'
              alt="truckico"
            />
      
      <div className='text-2xl text-gray ml-2 mr-12'>   3D MODEL</div>
      </div>
      </div>

    {/* ------- Heading ------  */}

      <motion.h1
        className='text-3xl font-semibold text-gray-700 mb-10 mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Our Latest Products
      </motion.h1>
        
         {/* ------- Feature Products ------  */}

     <div className='catg'>
     <motion.h1
        className='text-2xl font-semibold text-gray-700 mb-2 mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        CLOTH
      </motion.h1>
      <motion.h1
      className='text-1xl font-semibold text-gray-700 mb-2 mt-10 cursor-pointer hover:text-blue-800'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => navigate('/cloth')}
      >
        View More
      </motion.h1>
     </div>
     <motion.div
    // variants={stagger}
    layout='position'
    className='grid gap-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
  >
        <Featurecloth />
      </motion.div>


      <div className='catg'>
     <motion.h1
        className='text-2xl font-semibold text-gray-700 mb-2 mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Try On Glasses
      </motion.h1>
      <motion.h1
      className='text-1xl font-semibold text-gray-700 mb-2 mt-10 cursor-pointer hover:text-blue-800'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => navigate('/tryon')}
      >
        View More
      </motion.h1>
     </div>
     <motion.div
    // variants={stagger}
    layout='position'
    className='grid gap-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
  >
        <FeatureGlass/>
      </motion.div>

      <div className='catg'>
     <motion.h1
        className='text-2xl font-semibold text-gray-700 mb-5 mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        3D MODEL
      </motion.h1>
      <motion.h1
      className='text-1xl font-semibold text-gray-700 mb-5 mt-10 cursor-pointer hover:text-blue-800'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => navigate('/model')}
       >
        View More
      </motion.h1>
     </div>
     <motion.div
    // variants={stagger}
    layout='position'
    className='grid gap-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
  >
        <FeatureModel />
      </motion.div>

      {/* ------- Shop Now Button ------  */}

     
      <div
        className='flex flex-col  justify-center mt-10 sm:flex-row sm:space-y-0 space-y-3 sm:items-center sm: pb-3  mb-5'
      >
        <button
          className=' hover:bg-gray-900 hover:text-white border text-black px-4 py-1 transition-colors duration-300 flex justify-evenly items-center'
          onClick={() => navigate('/products')}
        >

          &nbsp;&nbsp; <span>SHOP NOW</span>

          <svg xmlns="http://www.w3.org/2000/svg"
            width="48" height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f8cc2f"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      {/* ------- Contact Box ------  */}


      <div className='mt-10 mb-10 flex relative justify-evenly cate '> 
      <div className='mt-10 mb-10 hover:shadow-xl hover:bg-green-200 bg-green-100 rounded h-24 flex relative  items-center'>
            <Avatar
              style={{ width: "5vmax", height: "5vmax", margin: "2vmax 0"  }}
              src={truckico}
              alt="truckico"
            />
      
      <div className='text-2xl  ml-2 mr-2'>   FASTEST DELIVERY</div>
      </div>
      <div className='mt-10 mb-10  hover:shadow-xl hover:bg-red-200 bg-red-100 rounded h-24 flex relative  items-center'>
            <Avatar
              style={{ width: "5vmax", height: "5vmax", margin: "2vmax 0" }}
              src={serico}
              alt="truckico"
            />
      
      <div className='text-2xl text-gray ml-2 mr-2 '>  CUSTOMER SUPPORT</div>
      </div>
      <div className='mt-10 mb-10 hover:shadow-xl hover:bg-blue-200 bg-blue-100 rounded h-24 flex relative  items-center'>
            <Avatar
              style={{ width: "5vmax", height: "5vmax", margin: "2vmax 0" }}
              src={quaico}
              alt="truckico"
            />
      
      <div className='text-2xl text-gray ml-2 mr-2'>   QUALITY PRODUCT</div>
      </div>
      </div>

      {/* ------- Newsletter Div ------  */}


      <div className='w-full h-auto py-16 text-black  px-4 bgNews '>
      <div className='max-w-1240 mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold py-2'>Want more discount to <span className='nonStp'>NON-STOP</span> Shopping ?</h1>
          <p>Sign up to our newsletter & stay update.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex  w-full rounded-md text-black' type='email' placeholder='Enter your email' />
            <button className='bg-black text-white rounded-md font-medium w-200 ml-4 my-6 px-6 py-3'>Subscribe</button>
          </div>

        </div>
      </div>

    </div>
    <div className='py-10'></div>
      
    </motion.div>


  );
 
};

export default HomeScreen;
