import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
            className="z-50 backdrop w-full h-full fixed top-0 left-0 bg-pink-600/90 flex items-center justify-center"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div >
    )
}

export default Backdrop;