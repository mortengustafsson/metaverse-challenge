import React from "react";
import { motion } from "framer-motion"

const AuthenticatingView = () => {

    const dropDownAnimation = {
        initial: { y: "-100vw", opacity: 0 },
        animate: { y: "0", opacity: 1 },
        exit: { y: "-100vw", opacity: 0 }
    }

    const popUpAnimation = {
        initial: { y: "100vw", opacity: 0 },
        animate: { y: "0", opacity: 1 },
        exit: { y: "100vw", opacity: 0 }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <motion.div
                variants={dropDownAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
            >
                <div className="text-5xl sm:text-9xl font-Bebas text-white">Authenticating</div>
            </motion.div>
            <motion.div
                variants={popUpAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
            >
                <div className="text-2xl sm:text-5xl font-Bebas text-white ">
                    Please wait
                    <div className="inline-block">
                        <span className="animate-bounceA inline-block">.</span>
                        <span className="animate-bounceB inline-block">.</span>
                        <span className="animate-bounceC inline-block">.</span>
                    </div>
                </div>
            </motion.div >
        </div >
    )
}

export default AuthenticatingView
