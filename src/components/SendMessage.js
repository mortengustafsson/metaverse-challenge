import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {

    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");
    const [sendButtonVisible, setSendButtonVisible] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {
            console.log(message);
        }, (error) => {
            console.log(error.message);
        })

        setMessage("");

        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" })

    }

    useEffect(() => {
        setSendButtonVisible(!isEmpty(message))
    }, [message])

    const isEmpty = (str) => (str.replace(/^\s+|\s+$/gm, '').length == 0)

    const updateMessage = (e) => {
        e.preventDefault();
        const _message = e.target.value;
        setMessage(_message);
    }

    return (
        <div className="flex justify-center">
            <form className="fixed bottom-14 right-0 left-0 sm:right-auto sm:left-auto w-full sm:w-11/12 z-50 sm:max-w-2xl m-auto sm:inset-x-0 p-4" onSubmit={(e) => { sendMessage(e) }}>
                <div className="relative flex w-full sm:w-11/12 z-50 m-auto sm:max-w-2xl">
                    <input
                        className="
                bg-white 
                shadow-lg 
                shadow-black/60 
                flex-grow 
                text-gray-800 
                appearance-none 
                border-4
                border-gray-400
                rounded-full 
                py-4
                pl-6
                sm:pr-[5.4rem]
                placeholder:text-gray-700 
                leading-tight 
                focus:outline-none 
                focus:shadow-outline"
                        id="username"
                        type="text"
                        autoComplete="off"
                        value={message}
                        onChange={(e) => { updateMessage(e) }}
                        placeholder={`Enter a message ${user.getUsername()}`}
                    />
                    {sendButtonVisible && <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opcaity: 0 }}
                        type="submit"
                        onClick={sendMessage}
                        className="text-white absolute right-0 bottom-0 top-0 text-2xl font-Bebas bg-pink-500 m-2 px-4 pt-1 rounded-full">
                        Send
                    </motion.button>
                    }
                </div>

            </form >
        </div>
    )
}

export default SendMessage;