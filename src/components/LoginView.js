import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import AuthenticatingView from "./AuthenticatingView";
import Backdrop from "./Backdrop";

const LoginView = () => {
    const { authenticate, isAuthenticating } = useMoralis();
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
                        className="text-white text-9xl px-4 p-2 font-bold overflow-hidden"
                    >
                        Enter the METAVERSE
                    </p>
                    <motion.button
                        className="bg-pink-600 text-white px-6 pb-2 pt-3 mt-10 text-4xl"
                        onClick={auth}
                        whileHover={{ opacity: 0.8 }}
                        transition={{
                            duration: 0.3
                        }}>
                        Login
                    </motion.button>
                </div>
            </div>
            <div className="w-full h-screen bg-gray-800 overflow-hidden">
                <Image src="/31632.jpg" layout='fill' objectFit="cover" priority={true}></Image>
            </div>

            <div className="font-Titillium rotate-6 absolute z-30 bg-blue-600 -top-2 -right-2 bg text-white px-8 py-6 text-center uppercase shadow-xl shadow-black ">
                <div>Guaranteed</div>
                <div className=" font-bold text-xl"> Corona free</div>
            </div>

        </div >
    )
}

export default LoginView
