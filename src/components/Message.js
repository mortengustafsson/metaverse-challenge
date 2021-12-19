import { motion } from "framer-motion";
import { useMoralis, useMoralisQuery } from "react-moralis";
import StaticAvatar from "./StaticAvatar";
import TimeAgo from 'timeago-react';

const Message = ({ message }) => {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get("ethAddress");

    return (
        <motion.div
            className={`${isUserMessage ? 'origin-right' : 'origin-left'} my-0`}
            whileHover={{ scale: 1.15 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        >
            <div className={`flex space-x-2 relative ${isUserMessage && 'justify-end'}`}>
                <div className={`h-8 w-8 border-2 border-gray-500 rounded-full overflow-hidden relative bg-gradient-to-b from-gray-700 to-gray-90 ${isUserMessage && "order-last ml-2"}`}>
                    <StaticAvatar userName={message.get("username")} />
                </div>
                <div className="flex flex-col max-w-[70%] w-auto">
                    <p className={`pb-2 text-sm ${isUserMessage ? 'text-right' : 'text-left'}`}> {message.get('username')}
                    </p>
                    <div className={`flex space-x-4 p-3 rounded-lg breakWord ${isUserMessage
                        ? "rounded-tr-none bg-pink-500"
                        : "rounded-tl-none bg-blue-500"}`
                    }>
                        <p> {message.get("message")}</p>

                    </div>
                    <p className={`${isUserMessage ? 'text-pink-200 text-right' : 'text-blue-200 text-left'} pt-2 text-xs`}>
                        <TimeAgo datetime={message.createdAt} />
                    </p>
                </div>
            </div >
        </motion.div >
    )
}

export default Message;