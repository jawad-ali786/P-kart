import React, { Fragment, useEffect, useState } from "react";
import "../../screens/Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../redux/actions/productActions";
import Loader from "../Loader.js";
import AllProductCard from "../Card/AllProductCard.js";
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/styles'
import ReactPaginate from 'react-paginate';
import { Slider } from "@material-ui/core";
import 'rc-slider/assets/index.css';
import { motion } from 'framer-motion';
import Typography from "@material-ui/core/Typography";
import MetaData from "../Meta.js";




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





const ShopAll = () => {

  const filterLogo = 'https://res.cloudinary.com/df6uhxehr/image/upload/v1672351370/Logo/filter_rbpeix.png'
  const emptyImg = 'https://res.cloudinary.com/df6uhxehr/image/upload/v1672351405/Logo/empty_xo85ys.svg';

  const dispatch = useDispatch();
  const [pageNumber, setpageNumber] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [category, setCategory] = useState('clothe');
  const params = useParams();
  const keyword = params.keyword || '';
  const [pages, setPages] = useState(1);
  const [visible, setVisible] = useState(false)
  const [checked, setChecked] = useState(false)
  const [checkedone, setCheckedone] = useState(false)
  const [checkedtwo, setCheckedtwo] = useState(false)
  const [checkedthree, setCheckedthree] = useState(false)
  const [checkedfour, setCheckedfour] = useState(false)
  const [checkedfive, setCheckedfive] = useState(false)
  const {
    products,
    loading,
    pages: totalPage,
  } = useSelector((state) => state.productList);

 
let brand = ''
if(checked || checkedone || checkedtwo || checkedthree || checkedfour || checkedfive){
  if(checked){
    brand = checked
  }
  if( checked && checkedone){
    brand = `${checked}&brand=${checkedone}`
  }
  else if(checkedone){
    brand = checkedone
  }
  if(checked && checkedone && checkedtwo){
    brand = `${checked}&brand=${checkedone}&brand=${checkedtwo}`
  }
  else if(checkedtwo){
    brand = checkedtwo
  }
  if(checked && checkedone && checkedtwo && checkedthree){
    brand = `${checked}&brand=${checkedone}&brand=${checkedtwo}&brand=${checkedthree}`
  }
  else if(checkedthree){
    brand = checkedthree

  }
  if(checked && checkedone && checkedtwo && checkedthree && checkedfour){
    brand = `${checked}&brand=${checkedone}&brand=${checkedtwo}&brand=${checkedthree}&brand=${checkedfour}`
  }
  else if(checkedfour){
      brand = checkedfour
      
  }
  if(checked && checkedone && checkedtwo && checkedthree && checkedfour && checkedfive){
    brand = `${checked}&brand=${checkedone}&brand=${checkedtwo}&brand=${checkedthree}&brand=${checkedfour}&brand=${checkedfive}`

  }
  else if(checkedfive){
      brand = checkedfive
  }
  
}




  useEffect(() => {


    dispatch(getProductList(keyword, pageNumber, price, category , brand  ));
  }, [dispatch, keyword, pageNumber, price, category , brand, alert]);

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



  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const classes = useStyles();

  


  function handleclick() {
    setPrice([0, 50000])
    setpageNumber(1)
    setPages('')
    setChecked(false)
    setCheckedone(false)
    setCheckedtwo(false)
    setCheckedthree(false)
    setCheckedfour(false)
    setCheckedfive(false)

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
            {visible ?
              <div className="middFooter ml-7  " visible={visible.toString()}>
                <Typography>SLECT BRAND  :</Typography>
                <div className="flex flex-row justify-between flex-wrap ">

                  <div className="text-md ml-2">
                <input
                className="text-black bg-black  focus:text-black mr-1"
                  type="checkbox"
                  id="Generation"
                  name="Generation"
                  value="Generation"
                  checked={checked}
                  onChange={(event)=> setChecked(event.target.value)}
                />
                Generation
                </div>
                <div className="text-md ml-2">
                <input
                className="text-black bg-black  focus:text-black mr-1"
                  type="checkbox"
                  id="Cloth"
                  name="Rangrasiya"
                  value="Rangrasiya"
                  checked={checkedone}
                  onChange={(event)=> setCheckedone(event.target.value)}
                />
                Rangrasiya
                </div>
                <div className="text-md ml-2">
                <input
                className="text-black bg-black focus:text-black mr-1"
                  type="checkbox"
                  id="Cloth"
                  name="Zeen Women"
                  value="Zeen Women"
                  checked={checkedtwo}
                  onChange={(event)=> setCheckedtwo(event.target.value)}
                />
                Zeen Women
                </div>
                <div className="text-md ml-2">
                <input
                className="text-black bg-black  focus:text-black mr-1"
                  type="checkbox"
                  id="Cloth"
                  name="Khaadi"
                  value="Khaadi"
                  checked={checkedthree}
                  onChange={(event)=> setCheckedthree(event.target.value)}
                />
                Khaadi
                </div>
                <div className="text-md ml-2">
                <input
                className="text-black bg-black  focus:text-black mr-1"
                  type="checkbox"
                  id="Cloth"
                  name="Sanasafinaz"
                  value="Sanasafinaz"
                  checked={checkedfour}
                  onChange={(event)=> setCheckedfour(event.target.value)}
                />
                Sanasafinaz
                </div>
                <div className="text-md ml-2">
                <input
                className="text-black bg-black  focus:text-black mr-1"
                  type="checkbox"
                  id="Cloth"
                  name="outfitters"
                  value="Outfitters"
                  checked={checkedfive}
                  onChange={(event)=> setCheckedfive(event.target.value)}
                />
                Outfitters
                </div>
                </div>
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
              <h4 className='text-center text-lg lg:text-md tex2-gray-700'>
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

export default ShopAll;





