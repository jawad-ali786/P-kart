import React from 'react';


const Container = ({ children, className }) => {
  return (
   <div className={`max-w-7xl mx-auto px-6 bg-white rounded-bl-full  bg-opacity-60 backdrop-filter backdrop-blur-lg lg:px-8 my-12  ${className}`}>
      {children}
    </div>
    
  );
};

export default Container;
