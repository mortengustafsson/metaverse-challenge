const UptoDateView = ({ endOfMessagesRef }) => {
    return (<div ref={endOfMessagesRef} className="m-10 pt-8 text-lg text-center"><span className=" font-bold text-xl">Congratulation</span> - you're up to date.</div>)
}

export default UptoDateView;