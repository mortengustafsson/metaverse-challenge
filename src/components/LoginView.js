import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import AuthenticatingView from "./AuthenticatingView";
import Backdrop from "./Backdrop";

const LoginView = () => {
    const { authenticate, isAuthenticating } = useMoralis();

    return (
        <div className="overflow-hidden h-full reltaive">
            {isAuthenticating ? < Backdrop > <AuthenticatingView /> </Backdrop> : null}
            <div className="flex flex-col justify-center items-center absolute space-y-4 w-full h-screen z-30">
                <div className=" text-center font-Bebas relative">
                    <div className="font-Titillium rotate-6 absolute z-30 bg-black -top-6 -right-2 bg text-white px-4 py-1 text-center uppercase ">
                        <div>Guaranteed</div>
                        <div className=" font-bold text-xl"> Corona free</div>
                    </div>
                    <p className="text-white text-9xl px-4 p-2 font-bold">Enter the METAVERSE</p>
                    <button
                        className="bg-pink-600 text-white px-6 pb-2 pt-3 mt-10 text-4xl"
                        onClick={authenticate}>
                        Login</button>
                </div>
            </div>
            <div className="w-full h-screen bg-gray-800 overflow-hidden">
                <Image src="/3163-min2.webp" layout='fill' objectFit="cover"></Image>
            </div>
        </div >
    )
}

export default LoginView
