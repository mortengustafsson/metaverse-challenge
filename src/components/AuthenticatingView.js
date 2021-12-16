import { motion } from "framer-motion"

const AuthenticatingView = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <motion.div
                initial={{
                    y: "-100vw",
                    opacity: 0
                }}
                animate={{
                    y: "0",
                    opacity: 1
                }}
                exit={{
                    y: "100px",
                    opacity: 0
                }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-5xl sm:text-9xl font-Bebas text-white">Authenticating</div>
            </motion.div>
            <motion.div
                initial={{
                    y: "100vw",
                    opacity: 0
                }}
                animate={{
                    y: "0",
                    opacity: 1
                }}
                exit={{
                    y: "-100px",
                    opacity: 0
                }}
                transition={{ duration: 0.6 }}

            >
                <div className=" text-2xl sm:text-5xl font-Bebas text-white ">
                    Please wait
                    <span className="animate-bounce-1 inline-block">.</span>
                    <span className="animate-bounce-2 inline-block">.</span>
                    <span className="animate-bounce-3 inline-block">.</span></div>
            </motion.div>
        </div >


    )
}

export default AuthenticatingView
