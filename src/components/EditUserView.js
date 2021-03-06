import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMoralis } from "react-moralis";

const EditUserView = ({ didTapCancel }) => {

    const { user, setUserData, isUserUpdating } = useMoralis();
    const [username, setUsername] = useState(user.getUsername());
    const [usernameIsEmpty, setUsernameIsEmpty] = useState(true);

    const updateUserName = (e) => {
        setUsernameIsEmpty((e.target.value.replace(/^\s+|\s+$/gm, '').length == 0))
        setUsername(e.target.value)
    };

    const storeUserName = () => {
        setUserData({ username });
        didTapCancel();
    }

    const restoreUserName = () => {
        if (!username) return setUsername(user.getUsername());
    }

    return (
        <motion.div
            className="flex flex-col w-full m-4 sm:m-auto lg:w-1/2 sm:max-w-lg text-gray-800 items-center justify-center bg-gray-100 p-6 py-8 rounded-xl shadow-lg shadow-gray-900/40"
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 125 }}
            onClick={(e) => { e.stopPropagation() }}
        >
            <h1 className="text-5xl font-Bebas">Edit Profile</h1>

            <div className="p-4 pb-6 w-full">
                <label className="block text-gray-700 text-sm mb-2 text-left" htmlFor="username">
                    Username:
                </label>
                <input onChange={(e) => { updateUserName(e) }} onBlur={restoreUserName} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={username} />
            </div>

            <div className="flex">
                <button disabled={isUserUpdating || usernameIsEmpty} className="mr-2 bg-pink-500 p-2 rounded-lg text-white" onClick={storeUserName}>Save</button>
                <button className="ml-2 bg-gray-400 p-2 rounded-lg text-white" onClick={didTapCancel}>Cancel</button>
            </div>
        </motion.div >
    )
}

export default EditUserView;