import ChatMessage from "./ChatMessage";

function MessageList({messages}){

    const messageList = messages.map((message, key) => {
        return <ChatMessage {...message} key={key}/>;
    });

    return(
        <div id="chat-body">
            {messageList}
        </div>
    );
}

export default MessageList;