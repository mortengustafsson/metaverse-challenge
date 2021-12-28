import React from "react";
import { useRef } from "react";
import { useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
import UptoDateView from "./UptoDateView";

const MessageView = () => {
    const endOfMessagesRef = useRef(null);

    const didSendMessage = () => {
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const { data } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt'), [], { live: true }
    );

    return (
        <div className="text-white m-auto space-y-3 pb-56 sm:max-w-2xl w-full">
            {data.map((message) => {
                return <Message key={message.id} message={message} />
            })}
            <div ref={endOfMessagesRef}>
                <UptoDateView />
            </div>
            <SendMessage didSendMessage={didSendMessage} />
        </div>
    )
}

export default MessageView;