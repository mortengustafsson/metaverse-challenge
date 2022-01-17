import React from "react";
import { useRef } from "react";
import { useMoralisQuery } from "react-moralis";
import MessageView from "./MessageView";
import SendMessage from "./SendMessage";
import UpToDateView from "./UpToDateView";

const MessagesView = () => {
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
                return <MessageView key={message.id} message={message} />
            })}
            <div ref={endOfMessagesRef}>
                <UpToDateView />
            </div>
            <SendMessage didSendMessage={didSendMessage} />
        </div>
    )
}

export default MessagesView;