import "./Chat.css"
import mainPFP from "../Pictures/user3-icon.jpg";
import Profile from "./Profile";
import ChatTitle from "./ChatTitle";
import {useState} from "react";
import MessageList from "./MessageList";
import ChatList from "./ChatList";
import contacts from "./Contacts"
import MessageSender from "./MessageSender";

function Chat() {

    // whenever a contact is added, the page is re-rendered.
    const [chats,setContacts]=useState(contacts);

    const user = {
        pfp: mainPFP,
        name: "Alice Smithhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    }

    const[selectedUser,setSelectedUser]=useState(chats.filter((contact) => {
        return contact.classes.includes("selected-preview");
    })[0]);

    return (
        <>
            <div id="main">
                <Profile user={user} setContacts={setContacts}/>
                <ChatList chats={chats} user={selectedUser} setSelectedUser={setSelectedUser}/>
                <div id="chat">
                    <ChatTitle user={selectedUser}/>
                    <MessageList user={selectedUser} />
                    <MessageSender contact={selectedUser} setSelectedUser={setSelectedUser} />
                </div>
            </div>
        </>
    );
}


export default Chat