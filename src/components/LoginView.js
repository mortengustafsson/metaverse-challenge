import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import AuthenticatingView from "./AuthenticatingView";
import Backdrop from "./Backdrop";

const LoginView = () => {
    const { authenticate, isAuthenticating } = useMoralis();
    const [didTapLogin, setDidTapLogin] = useState(false);
    const enterMessage = "Enter the METAVERSE";

    const auth = () => {
        setDidTapLogin(true);
        authenticate();
    }

    return (
        <div className="overflow-hidden h-full reltaive font-Bebas">
            <div className=" w-full h-screen bg-gray-800 overflow-hidden fixed ">
                <Image src="/1download.jpg" layout='fill' objectFit="cover" priority={true}></Image>
            </div>

            <div className="flex flex-col justify-center items-center w-full h-screen z-40">
                <div className="text-center">
                    <p data-text={enterMessage} className="text-white text-6xl sm:text-9xl px-4 p-2 font-bold overflow-hidden glitch is-glitchin ">
                        {enterMessage}
                    </p>
                    <button
                        className="bg-pink-600 text-white px-6 pb-2 pt-3 mt-10 text-2xl sm:text-3xl relative z-10 shadow-2xl shadow-black hover:opacity-80"
                        onClick={auth}
                    >
                        Login
                    </button>
                    <a href="https://metamask.io/" target="_blank" className="inline-block bg-white text-pink-600 px-6 pb-2 pt-3 mt-10 text-2xl sm:text-3xl relative z-10 shadow-2xl shadow-black hover:opacity-80" rel="noreferrer" >
                        Register
                    </a>
                </div>
            </div>

            {(isAuthenticating && didTapLogin) ? < Backdrop > <AuthenticatingView /> </Backdrop> : null}

        </div >
    )
}

export default LoginView
