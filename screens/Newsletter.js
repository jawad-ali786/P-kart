import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Avatar } from "@material-ui/core";

import { PRODUCT_CREATE_RESET } from '../redux/actions/types';



const Newsletter = () => {



   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [datam, setDatam] = useState([]);
  const { user: userLogin } = useSelector(state => state.userLogin);
  const {
    success: productCreateSuccess,
    loading: productCreateLoading,
  } = useSelector(state => state.productCreate);




  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userLogin || !userLogin?.isAdmin) {
      navigate('/profile');
    } else {
      if (productCreateSuccess) {
        navigate('/');
        dispatch({ type: PRODUCT_CREATE_RESET });
      }
    }
  }, [dispatch, userLogin, navigate, productCreateSuccess]);


 
  const scrape = () => {

    axios
      .get('http://localhost:4000/all')
      .then((response) => {
        const { result } = response.data;
        setDatam([...result]);

        console.log('respone is ', result);
      })
      .catch((err) => {

        console.log('error is ', err);
      });
  };


  useEffect(() => {
    scrape();
  }, [])

  let items = []

  for (let i of datam) {
    for (let j of i) {
      items.push(j)
    }
  }

  console.log(items);



  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.3,
        delay: 0.2,
      },
    },
  };





  return (
    






    <div className='overflow-x-auto mt-6'>
      <div className='my-5'><button
        className='bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 transition-colors duration-300 flex items-center'

      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
        &nbsp;&nbsp; <span>Add product</span>
      </button></div>
      <motion.table
        exit={{ opacity: 0 }}
        variants={stagger}
        initial='hidden'
        animate='visible'
        className='table-auto border-collapse w-full'
      >
        <thead>
          <tr
            className='rounded-lg text-sm font-medium text-gray-700 text-left'
            style={{ backgroundColor: '#f8f8f8' }}
          >
            <th className='px-4 py-2 whitespace-nowrap'>Picture</th>
            <th className='px-4 py-2 whitespace-nowrap'>Name</th>
            <th className='px-4 py-2 whitespace-nowrap'>Brand</th>
            <th className='px-4 py-2 whitespace-nowrap'>Category</th>
            <th className='px-4 py-2 whitespace-nowrap'>Stock</th>
            <th className='px-4 py-2 whitespace-nowrap'>Price</th>
            <th className='px-4 py-2 whitespace-nowrap'>Product URL</th>
          </tr>
        </thead>
        <tbody className='text-sm font-normal text-gray-700'>
          {items?.map(product => (
 

            
            <tr
              className='hover:bg-gray-100 border-b border-gray-200 py-10'
              key={product.key}
            >
              <td className='px-4 py-4 whitespace-nowrap'>
                <img
                  src={product.image}
                  alt=''
                  className='w-10 h-10 rounded-md'

                />
              </td>
              <td className='px-4 py-4 whitespace-nowrap'>
                
                {product.name}

              </td>
              <td className='px-4 py-4 whitespace-nowrap'>{product.brand}</td>
              <td className='px-4 py-4 whitespace-nowrap'>
                {product.category}
              </td>
              <td className='px-4 py-4 whitespace-nowrap'>
                {product.countInstock > 0 ? (
                  <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                      aria-hidden
                      className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative text-xs'>In stock</span>

                  </span>
                ) : (
                  <span className='relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight'>
                    <span
                      aria-hidden
                      className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative text-xs'>Out of stock</span>
                  </span>
                )}
              </td>
              <td className='px-4 py-4 whitespace-nowrap'>
                {product.price}
              </td>
              <td className='px-4 py-4 whitespace-nowrap'>
                <div className='flex items-center space-x-3'>
                  {product.prod_link}
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </motion.table>
    </div>
  );
}

export default Newsletter