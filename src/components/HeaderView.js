import { motion } from "framer-motion";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import AvatarView from "./AvatarView";

const HeaderView = ({ didTapEdit }) => {
    const { user } = useMoralis();
    const { logout } = useMoralis();
    const userName = user.getUsername();

    return (
        <div className="max-w-screen mx-auto w-full bg-gray-900 pt-12 pb-8 flex flex-col justify-center shadow-xl shadow-black/40 border-b-2 border-pink-500 items-center relative text-center text-white">
            <div>
                <div className="h-48 w-48 m-auto border-8 border-gray-500 rounded-full overflow-hidden relative bg-gradient-to-b from-gray-700 to-gray-900">
                    <motion.div
                        initial={{ y: "80px", opacity: 0 }}
                        animate={{ y: "0", opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            type: "spring",
                            stiffness: 200
                        }}
                        className="w-full h-full scale-90">
                        <AvatarView userName={userName} />
                    </motion.div>
                </div>
                <div className="mt-4 text-xl font-Titillium">Hello, <span className="font-bold ">{userName}</span></div>
            </div>
            <button
                className="text-pink-600 pb-1 pt-2 px-6 text-2xl font-Bebas underline absolute sm:right-5 sm:top-5 top-1 right-0"
                onClick={logout}>
                Logout
            </button>
            <button
                className="text-white pb-1 pt-4 px-6 text-xl font-Bebas underline absolute sm:right-5 sm:top-12 top-8 right-0"
                onClick={didTapEdit}>
                Edit Profile
            </button>
        </div >
    )
}

export default HeaderView
