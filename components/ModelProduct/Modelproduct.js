import React from 'react'
import { useNavigate } from 'react-router-dom';
import './modelproduct.css'

const ModelALL = () => {

    const navigate = useNavigate();
    return <div>
        <div className='frstDiv  w-full '>
            <div className=' w-full' onClick={() => navigate('/model-chair')}>
                <div className='text-2xl bg-gray-700 text-white w-full text-center tracking-widest font-serif border-t border-b border-black'>CHAIR</div>
                <img className='cursor-pointer hover:opacity-30 w-full object-cover  mx-auto'
                    src='https://img.freepik.com/free-vector/red-vintage-armchair-realistic-style_1441-760.jpg?w=2000'
                    alt=''
                />


            </div>
            <div className='secDiv  w-full  mx-1 '>
                <div>
                    <div onClick={() => navigate('/model-sofa')}>
                        <div className='text-2xl w-full text-center tracking-widest font-serif border-t border-b border-black'>SOFA</div>
                        <img className='cursor-pointer hover:opacity-30 h-74 w-full object-cover mx-auto'
                            src='https://d1k47ujo4hlhfb.cloudfront.net/catalog/product/a/n/anniston-3-seater-sofa-in-marine-colour-1-e51ab3a-interwood-mobel.png'
                            alt=''
                        />
                    </div>
                </div>

            </div>
        </div>
        <div className='w-full px-5 py-5 '>
            <div>
                <div onClick={() => navigate('/model-furniture')}>
                    <div className='text-2xl bg-gray-700 text-white w-full mb-5 text-center tracking-widest font-serif border-t border-b border-black'>FURNITURE</div>
                    <img className='cursor-pointer hover:opacity-30 h-96 w-full object-cover mx-auto '
                        src='https://www.alhabibpaneldoors.com/images/items-item/office-furniture-wardrobe-desk-hpd365.jpeg'
                        alt=''
                    /></div>
            </div>
            <div>
                <div onClick={() => navigate('/model-decoration')}>
                    <div className='text-2xl w-full mb-5 mt-10 text-center tracking-widest font-serif border-t border-b border-black'>DECORATION ITEM</div>
                    <img className='cursor-pointer hover:opacity-30 h-96 w-full object-fit mx-auto'
                        src='https://media.designcafe.com/wp-content/uploads/2020/09/30173843/home-decor-ideas-for-living-room.jpg'
                        alt=''
                    /></div>
            </div>
            
        </div>

    </div>

}

export default ModelALL