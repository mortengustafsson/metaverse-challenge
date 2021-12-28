import React from "react";
import { motion } from "framer-motion";
import StaticAvatarView from "./StaticAvatar";

const AvatarView = ({ userName, didTapEdit, didTapLogout, showSubMenu }) => {
    return (
        <motion.div
            whileHover={{ y: "-200px" }}
            animate={showSubMenu ? { y: "-200px" } : { y: "0" }}
            className="w-full h-full cursor-pointer "
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="w-full h-full">
                <StaticAvatarView userName={userName} />
            </div>
            <div className=" w-full h-[200px] flex justify-center items-center flex-col">
                <div onClick={didTapEdit} className=" hover:text-pink-500 text-white font-Bebas pt-8 text-4xl border-b border-gray-500"> Edit </div>
                <div onClick={didTapLogout} className=" hover:text-pink-500 text-white font-Bebas pt-2 -pb-14 text-2xl border-b border-gray-500"> Logout </div>
            </div>
        </motion.div >
    )
}

export default AvatarView;