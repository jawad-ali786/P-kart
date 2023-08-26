import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../redux/actions/productActions";
import Loader from "../components/Loader";
import AllProductCard from "../components/Card/AllProductCard";
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/styles'
import ReactPaginate from 'react-paginate';
import { Slider } from "@material-ui/core";
import 'rc-slider/assets/index.css';
import { motion } from 'framer-motion';
import Typography from "@material-ui/core/Typography";
import MetaData from "../components/Meta";
import Select from 'react-select'
import filterLogo from '../assets/filter.png'
import emptyImg from '../assets/empty.svg';


const categories = [
  { value: "clothe", label: "clothe" },
  { value: "Furniture", label: "Furniture" },
  { value: "Decoration", label: "Decoration" },
  { value: "Electronic", label: "Electronic" },
  
];








 


const useStyles = makeStyles({
  root: {
    width: '88%',
    display: 'block',
    margin: '0px auto 0 auto'
  },
  thumb: {
    color: '#ed5223'
  },
  rail: {
    color: '#000000'
  },
  track: {
    color: '#111111'
  },
});





const Productss = () => {


  const dispatch = useDispatch();
  const [pageNumber, setpageNumber] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [category, setCategory] = useState('');
  const params = useParams();
  const keyword = params.keyword || '';
  const [pages, setPages] = useState(1);
  const [visible, setVisible] = useState(false);
  const [brand , setBrand] = useState('');


  const {
    products,
    loading,
    pages: totalPage,
  } = useSelector((state) => state.productList);


  useEffect(() => {


    dispatch(getProductList(keyword, pageNumber, price, category , brand));
  }, [dispatch, keyword, pageNumber, price, category, brand , alert]);

  useEffect(() => {
    if (!totalPage) {
      setPages(page => page);
    } else {
      setPages(totalPage);
    }
  }, [totalPage]);


  const pageHandler = (page) => {
    setpageNumber(page.selected + 1);
  };




const brandname = [
  { value: "Generation", label: "Generation" },
  { value: "Rangrasiya", label: "Rangrasiya" },
  { value: "Zeen Women", label:"Zeen Women"},
  { value: "Khaadi" , label: "Khaadi"},
  { value: "Sanasafinaz" , label: "Sanasafinaz"},
  { value: "Outfitters", label: "Outfitters"},
  { value: "limelight" , label: "limelight"},
  { value: "Chinese", label: "Chinese" },
  { value: "Wood", label: "Wood" },
]

  

  const catHandler = e => {
    setCategory(e.label);
  }

  const brandHandler = e => {
    setBrand(e.label);
  }




  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const classes = useStyles();


function handleclick(){
  setBrand('')
  setCategory('')
  setPrice([0, 50000])
  setpageNumber(1)
  setPages('')

}








  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS -- P-KART" />
          <div>
            <h2 className="productsHeading">PRODUCTS</h2>
            <p className="bordar"></p>
          </div>
          <div className="filter">
            <div className="righhtFooter">
              <button onClick={() => setVisible(!visible)}><img src={filterLogo} alt='filterIcon' /></button>
              <div className="rightfilter">Filters</div>
            </div>
            {
              visible ? <div className="w-64 lefftFooter" visible={visible.toString()}>
                <Typography style={{ marginLeft: '10px', marginBottom: '20px' }}>Price : </Typography>
                <div className={classes.root}>
                  <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay='auto'
                    color='secondary'
                    min={0} max={50000}
                  />
                </div>

              </div> : null
            }
            {visible ? <div className="middFooter" visible = {visible.toString()}>
              <Typography>Categories  :</Typography>

              <Select
               className="select" 
               placeholder='Click Category' 
             
               options={categories}
               onChange={catHandler}
               />

            </div>
              : null

            }
              {visible ? <div className="middFootera" visible = {visible.toString()}>
              <Typography>Brand  :</Typography>

              <Select
               className="selectbrand" 
               placeholder='Click Brand' 
               options={brandname}
               onChange={brandHandler}
               />

            </div>
              : null

            }

          </div>
          <div className="py-5 clrfltr " onClick={handleclick}> Clear Filter </div>
          {products?.length === 0 ? (

            <div className='space-y-10'>
              <div className='flex justify-center items-center mt-20'>
                <img src={emptyImg} width='250' height='250' alt='' />
              </div>
              <h4 className='text-center text-lg lg:text-xl text-gray-700'>
                Sorry, products not found
              </h4>
            </div>
          ) : (

              <motion.div
                // variants={stagger}
                layout='position'
                className='grid gap-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
              >
                {products?.map((product, i) => (
                  <AllProductCard key={product?._id} {...{ product, i }} />
                ))}
              </motion.div>
            
          )

          }

        </>

      )
      }
           {pages >= 1 && (
                <div className='text-center'>
                  <div className='bg-gray-100  my-12 px-3 py-3 inline-block rounded-md'>
                    <ReactPaginate
                      previousLabel={
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 px-4 box-content'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 19l-7-7 7-7'
                          />
                        </svg>
                      }
                      nextLabel={
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 px-4 box-content'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      }
                      pageCount={pages}
                      onPageChange={pageHandler}
                      marginPagesDisplayed={0}
                      pageRangeDisplayed={1}
                      containerClassName={'text-lg flex space-x-3'}
                      previousLinkClassName={'outline-none rounded-md'}
                      pageLinkClassName={'px-4 outline-none'}
                      nextLinkClassName={'outline-none rounded-md'}
                      activeClassName={'bg-gray-50 border text-indigo-600'}
                      disabledClassName={'opacity-20'}
                      breakLabel={'...'}
                    />
                  </div>
                </div>
              )}

    </Fragment >

  );
};

export default Productss;





