import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const EditUserView = ({ didTapCancel }) => {

    const { user, setUserData, isUserUpdating } = useMoralis();
    const [username, setUsername] = useState(user.getUsername());

    const updateUserName = (e) => {
        setUsername(e.target.value)
    };

    const storeUserName = (e) => {
        if (!username) return;
        setUserData({ username });
        didTapCancel();
    }

    const restoreUserName = () => {
        if (!username) return setUsername(user.getUsername());
    }

    return (
        <motion.div
            className="flex flex-col w-full m-4 sm:m-auto lg:w-1/2 sm:max-w-lg text-gray-800 items-center justify-center bg-gray-100 p-6 py-8 rounded-xl shadow-lg shadow-gray-900/40"
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "100vh" }}
            onClick={(e) => { e.stopPropagation() }}
        >
            <h1 className="text-5xl font-Bebas">Edit Profile</h1>

            <div className="p-4 pb-6 w-full">
                <label class="block text-gray-700 text-sm mb-2 text-left" for="username">
                    Username:
                </label>
                <input onChange={(e) => { updateUserName(e) }} onBlur={restoreUserName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required placeholder={username} />
            </div>

            <div className="flex">
                <button disabled={isUserUpdating} className="mr-2 bg-pink-500 p-2 rounded-lg text-white" onClick={storeUserName}>Save</button>
                <button className="ml-2 bg-gray-400 p-2 rounded-lg text-white" onClick={didTapCancel}>Cancel</button>
            </div>
        </motion.div >
    )
}

export default EditUserView;