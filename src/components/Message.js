import { motion } from "framer-motion";
import { useMoralis, useMoralisQuery } from "react-moralis";
import AvatarView from "./AvatarView";

const Message = ({ message }) => {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get("ethAddress");

    return (
        <motion.div
            className={`${isUserMessage ? 'origin-right' : 'origin-left'}`}
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        >
            <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
                <div className={`h-8 w-8 border-2 border-gray-500 rounded-full overflow-hidden relative bg-gradient-to-b from-gray-700 to-gray-90 ${isUserMessage && "order-last ml-2"}`}>
                    <AvatarView userName={message.get("username")} />
                </div>
                <div className={`flex space-x-4 p-3 rounded-lg max-w-[70%] break-all ${isUserMessage
                    ? "rounded-br-none bg-pink-500"
                    : "rounded-bl-none bg-blue-500"}`
                }>
                    <p> {message.get("message")}</p>
                </div>
                <p className="absolute -bottom-5 text-xs"> {message.get('username')}</p>
            </div >

        </motion.div>
    )
}

export default Message;