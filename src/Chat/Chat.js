import "./Chat.css"
import mainPFP from "../Pictures/user3-icon.jpg";
import sendIcon from "../Pictures/send-icon.png";
import Profile from "./Profile";
import ChatTitle from "./ChatTitle";
import {useState, useRef} from "react";
import MessageList from "./MessageList";
import ChatList from "./ChatList";
import contacts from "./Contacts"
import MessageSender from "./MessageSender";

function Chat() {

    // whenever a contact is added, the page is re-rendered.
    const [chats,setContacts]=useState(contacts);

    const user = {
        pfp: mainPFP,
        name: "Alice Smith"
    }

    const selectedUser = chats.filter((contact) => {
        return contact.classes.includes("selected-preview");
    })[0];

    // whenever a message is added, the page is re-rendered.
    const [messages,setMessages]=useState(selectedUser.messages);

    return (
        <>
            <div id="main">
                <Profile user={user} setContacts={setContacts}/>
                <ChatList chats={chats} setMessages={setMessages}/>
                <div id="chat">
                    <ChatTitle user={selectedUser}/>
                    <MessageList messages={messages} />
                    <MessageSender setMessages={setMessages} />
                </div>
            </div>
        </>
    );
}


export default Chat