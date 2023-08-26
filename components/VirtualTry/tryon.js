import React from "react"
import FeatureGlass from "./FeatureGlass"
import { motion } from "framer-motion"


const tryon = () => {
  return (
    <motion.div
    // variants={stagger}
    layout='position'
    className='grid gap-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
  >
        <FeatureGlass/>
      </motion.div>
  )
}

export default tryon