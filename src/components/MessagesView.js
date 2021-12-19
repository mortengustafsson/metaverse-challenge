import { useRef } from "react";
import { useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
import UptoDateView from "./UptoDateView";

const MessageView = ({ endOfMessagesRef }) => {
    endOfMessagesRef = useRef(null);

    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt'), [], { live: true }
    );

    return (
        <div className="text-white m-auto space-y-3 pb-56 sm:max-w-2xl w-full">
            {data.map((message) => {
                return <Message key={message.id} message={message} />
            })}

            <UptoDateView endOfMessagesRef={endOfMessagesRef} />
            <SendMessage endOfMessagesRef={endOfMessagesRef} />

        </div>
    )
}

export default MessageView;