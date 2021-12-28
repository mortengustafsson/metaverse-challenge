import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import AvatarView from "./AvatarView";
import EditIcon from "./EditIcon";
import HelloUserView from "./HelloUserView";

const HeaderView = ({ willEdit }) => {
    const { user, logout } = useMoralis();
    const [showSubMenu, setShowSubMenu] = useState(false);
    const userName = user.getUsername();

    const bounceAnimation = {
        initial: { y: "80px", opacity: 0 },
        animate: { y: "0", opacity: 1 }
    }

    const didTapEdit = () => {
        willEdit();
    }

    return (
        <div className="max-w-screen mx-auto w-full bg-gray-900/95 pt-12 pb-8 flex flex-col justify-center shadow-xl shadow-black/40 border-b-2 border-pink-500 items-center relative text-center text-white">
            <div>
                <div className="relative">
                    <div
                        className="hidden sm:flex cursor-pointer h-10 w-10 bg-gray-500 absolute rounded-full right-1 bottom-1 z-50  justify-center items-center"
                        onMouseEnter={() => { setShowSubMenu(true) }}
                        onMouseLeave={() => { setShowSubMenu(false) }}
                    >
                        <EditIcon />
                    </div>
                    <div className="h-48 w-48 m-auto border-8 border-gray-500 rounded-full overflow-hidden relative bg-gradient-to-b from-gray-700 to-gray-900">
                        <motion.div
                            className="w-full h-full"
                            variants={bounceAnimation}
                            initial="initial"
                            animate="animate"
                            transition={{
                                delay: 0.2,
                                duration: 0.3,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            <AvatarView userName={userName} didTapEdit={didTapEdit} didTapLogout={logout} showSubMenu={showSubMenu} />
                        </motion.div>
                    </div>
                </div>
            </div>
            <HelloUserView userName={userName} />
            <button
                className="visible sm:hidden text-pink-500 pb-1 pt-2 px-6 text-2xl font-Bebas underline absolute sm:right-5 sm:top-5 top-1 right-0"
                onClick={logout}>
                Logout
            </button>
            <button
                className="visible sm:hidden text-white pb-1 pt-4 px-6 text-xl font-Bebas underline absolute sm:right-0 sm:top-0 top-8 right-0"
                onClick={didTapEdit}>
                Edit Profile
            </button>
        </div >
    )
}

export default HeaderView
