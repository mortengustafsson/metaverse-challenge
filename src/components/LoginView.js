import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import AuthenticatingView from "./AuthenticatingView";
import Backdrop from "./Backdrop";

const LoginView = () => {
    const { authenticate, isAuthenticating, authError } = useMoralis();
    const [didTapLogin, setDidTapLogin] = useState(false);

    const auth = () => {
        authenticate();
        setDidTapLogin(true);
    }

    useEffect(() => {
        setDidTapLogin(false)
    }, [])


    return (
        <div className="overflow-hidden h-full reltaive">
            {isAuthenticating && didTapLogin ? < Backdrop > <AuthenticatingView /> </Backdrop> : null}
            <div className="flex flex-col justify-center items-center absolute space-y-4 w-full h-screen z-30">
                <div className=" text-center font-Bebas relative ">
                    <p
                        className="text-white text-6xl sm:text-9xl px-4 p-2 font-bold overflow-hidden"
                    >
                        Enter the METAVERSE
                    </p>
                    <motion.button
                        className="bg-pink-600 text-white px-6 pb-2 pt-3 mt-10 text-2xl sm:text-3xl"
                        onClick={auth}
                        whileHover={{ opacity: 0.8 }}
                        transition={{
                            duration: 0.3
                        }}>
                        Login
                    </motion.button>
                </div>
            </div>
            <div className="w-full h-screen bg-gray-800 overflow-hidden fixed">
                <Image src="/31632.jpg" layout='fill' objectFit="cover" priority={true}></Image>
            </div>

        </div >
    )
}

export default LoginView
