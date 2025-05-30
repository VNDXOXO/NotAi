'use client'
import { motion } from "framer-motion";
import { Asterisk } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <motion.div
        className=""
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      >
      <Asterisk size={80} />
      </motion.div>
    </div>
  )
}

export default loading