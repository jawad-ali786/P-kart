import React from 'react'
import { motion } from 'framer-motion'
import './clothproduct.css'
import { useNavigate } from 'react-router-dom';

const ClothAll = () => {
    const navigate = useNavigate();

    return <div>
        <div className='frstDiv  w-full '>
            <div className=' w-full'>


                <motion.h1

                    className='bg-gray-700 text-white border border-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => navigate('/cloth-all')}
                >
                    SHOP ALL &nbsp; &rarr;
                </motion.h1>
                    <img className='opacity-55  hover:opacity-30 w-full object-cover  mx-auto'
                        src='https://cdn.shopify.com/s/files/1/0585/4445/5846/products/U0845-SSH-BLU_3.jpg?v=1627170552'
                        alt=''
                    />

            </div>
            <div className='secDiv  w-full  mx-1 '>
                <div>
                    <motion.h1

                        className='bg-gray-700 border border-white text-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button1'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => navigate('/cloth-generation')}
                    >
                        Generation &nbsp; &rarr;
                    </motion.h1>
                    <div >
                        <img className='opacity-55  hover:opacity-30 h-96 w-full object-cover mx-auto'
                            src='https://cdn.shopify.com/s/files/1/0530/9556/3414/products/Limelight-Summer-Lawn-Collection-2022_2000x.jpg?v=1644319062'
                            alt=''
                        />
                    </div>
                </div>
                <div>
                    <motion.h1

                        className='bg-gray-700 border border-white text-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button2'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => navigate('/cloth-rangrasiya')}
                    >
                        Rangrasiya &nbsp; &rarr;
                    </motion.h1>
                    <div ><img className='opacity-55  hover:opacity-30 h-96 w-full object-cover mx-auto'
                        src='http://cdn.shopify.com/s/files/1/2635/3244/products/U1507-Black_a88c0659-cdad-4e74-b469-bb58b88d29b4.jpg?v=1655193200'
                        alt=''
                    /></div>
                </div>
            </div>
        </div>
        <div className='w-full px-5 py-5 '>
            <motion.h1

                className='bg-gray-700 border border-white text-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => navigate('/cloth-zeen')}
            >
                Zeen &nbsp; &rarr;
            </motion.h1>
            <div >
                <img className='opacity-55  hover:opacity-30 h-96 w-full object-cover mx-auto'
                    src='https://www.brandsynario.com/wp-content/uploads/gul-ahmed.jpg'
                    alt=''
                />
            </div>
        </div>
        <div className='frstDiv  w-full '>
            <div className='secDiv  w-full  mx-1 '>

                <div>
                    <motion.h1

                        className='bg-gray-700 border border-white text-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button5'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => navigate('/cloth-khaadi')}
                    >
                        Khaadi &nbsp; &rarr;
                    </motion.h1>
                    <div >
                        <img className='opacity-55  hover:opacity-30 h-96 w-full object-cover mx-auto'
                            src='http://cdn.shopify.com/s/files/1/2635/3244/products/U0907-2PC-BRN_3.jpg?v=1571488353'
                            alt=''
                        />
                    </div>
                </div>
                <div>
                    <motion.h1

                        className='bg-gray-700 border border-white text-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button6'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => navigate('/cloth-sanasafinaz')}
                    >
                        Sana Safinaz &nbsp; &rarr;
                    </motion.h1>
                    <div ><img className='opacity-55  hover:opacity-30 h-96 w-full object-cover mx-auto'
                        src='http://cdn.shopify.com/s/files/1/2635/3244/products/DSC00068.jpg?v=1638872319'
                        alt=''
                    /></div>
                </div>
            </div>
            <div className=' w-full'>
                <motion.h1

                    className='bg-gray-700 border border-white text-white hover:bg-gray-900  hover:text-white  px-5 py-2 transition-colors duration-300 cursor-pointer button7'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => navigate('/cloth-outfiter')}
                >
                    Outfiter &nbsp; &rarr;
                </motion.h1>
                <div >
                    <img className='opacity-55  hover:opacity-30 w-full object-cover mx-auto'
                        src='http://cdn.shopify.com/s/files/1/2635/3244/products/013A9862_d3209316-c5e6-47f0-b387-15723281c07f.jpg?v=1663052305'
                        alt=''
                    />
                </div>
            </div>
        </div>
    </div>

}

export default ClothAll