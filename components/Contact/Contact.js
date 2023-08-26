import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
      <motion.div
      layout='position'
      className="w-full">
         
      </motion.div>,
      <div className="contactContainer">
      <a className="mailBtn" href="mailto:jawadali5658@gmail.com">
        <Button>Contact: jawadali5658@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
