import React, { useState, useRef, useEffect } from 'react'

import { JEELIZVTO, JEELIZVTOWIDGET } from 'jeelizvtowidget'
import './virtual.css'




function init_VTOWidget(placeHolder, canvas, toggleLoading , sku){

  
  
  


  JEELIZVTOWIDGET.start({
    placeHolder,
    canvas,
    callbacks: {
      ADJUST_START: null,
      ADJUST_END: null,
      LOADING_START: toggleLoading.bind(null, true),
      LOADING_END: toggleLoading.bind(null, false)
    },
    
    sku: sku, // SKU loadded at the beginning
    // image displayed when face is not found:
    searchImageMask: 'https://appstatic.jeeliz.com/jeewidget/images/target.png', //'https://appstatic.jeeliz.com/jeewidget/images/target.png',
    searchImageColor: 0xeeeeee, // color of loading (face not found) animation
    searchImageRotationSpeed: -0.001, // negative -> clockwise
    callbackReady: function(){
      console.log('INFO: JEELIZVTOWIDGET is ready :)');
    },
    onError: function(errorLabel){ // this function catches errors, so you can display custom integrated messages
      alert('An error happened. errorLabel =' + errorLabel)
      switch(errorLabel) {
        case 'WEBCAM_UNAVAILABLE':
          // the user has no camera, or does not want to share it.
          break;

        case 'INVALID_SKU':
          // the provided SKU does not match with a glasses model
          break;

        case 'PLACEHOLDER_NULL_WIDTH':
        case 'PLACEHOLDER_NULL_HEIGHT':
          // Something is wrong with the placeholder
          // (element whose id='JeelizVTOWidget')
          break;
          
        case 'FATAL':
        default:
          // a bit error happens:(
          break;
      } // end switch
    } // end onError()
  }) // end JEELIZVTOWIDGET.start call
}


function NewTry(props  ){

 

  const refPlaceHolder = useRef();
  const refCanvas = useRef();
  const refChangeModel = useRef();
  const refLoading = useRef();
  


  const toggleLoading = (isLoadingVisible) => {
    refLoading.current.style.display = (isLoadingVisible) ? 'block' : 'none';
  }

    
 
    
    
  useEffect(() => {
    let skuid = window.location.pathname
    var que = skuid.split("tryon")
    var splituri  = que[1].replace('/','')
    const sku = splituri
  
   
    const placeHolder = refPlaceHolder.current;
    const canvas = refCanvas.current;
    init_VTOWidget(placeHolder, canvas, toggleLoading , sku);
 
  
    return () => {
      JEELIZVTOWIDGET.destroy(300);
    }
  }, [])
  

  return (
    <div className=''>
        <div className=''>

       <canvas ref={refCanvas} className='JeelizVTOWidgetCanvas '></canvas>
       
       <div ref={refChangeModel} className='JeelizVTOWidgetControls JeelizVTOWidgetChangeModelContainer'>

       </div>
        </div>    
    <div ref={refPlaceHolder} className='JeelizVTOWidget'></div>
    <div ref={refLoading} className='JeelizVTOWidgetLoading'>
        <div className='JeelizVTOWidgetLoadingText'>
           LOADING...
         </div>
       </div>
     </div>
  
    
  )
}

export default NewTry