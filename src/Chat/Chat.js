import "./Chat.css"
import mainPFP from "../Pictures/user3-icon.jpg";
import sendIcon from "../Pictures/send-icon.png";
import Profile from "./Profile";
import ChatTitle from "./ChatTitle";
import {useState, useRef} from "react";
import ChatMessage from "./ChatMessage";
import ChatPreview from "./ChatPreview";
import userPFP from "../Pictures/user1-icon.jpg";
import user2PFP from "../Pictures/user2-icon.jpg";

function Chat() {

    const [contacts,setContacts]=useState([{
        pfp: userPFP,
        name: "Bill Tin",
        lastDate: "25/4/2023, 11:01:54 PM",
        lastMessage: "WORLDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD!",
        classes: "selected-preview"
    }, {
        pfp: user2PFP,
        name: "Jack Black",
        lastDate: "25/4/2023, 11:01:54 PM",
        lastMessage: "Foo!!",
        classes: ""
    }]);

    // Chat data
    const user = {
        pfp: mainPFP,
        name: "Alice Smith"
    }
    const [messages, setMessages] = useState([{
        message: "Hellooooooooooooooooooooooooo!",
        time: "00:00",
        type: "received"
    }, {
        message: "Worldddddddddddddddddddddddddd!",
        time: "00:00",
        type: "sent"
    }]);

    const messageList = messages.map((message, key) => {
        return <ChatMessage {...message} key={key}/>;
    });

    const chatList=contacts.map((contact,key)=>{
        return <ChatPreview {...contact} key={key} />
    });

    const userInput = useRef(null);

    const newMessage = function () {
        const date = new Date();
        const input = userInput.current.value;
        if (/\S/.test(input)) {
            let msg = {message: userInput.current.value, time: date.getHours() + ":" + date.getMinutes(), type: "sent"};
            console.log(msg);

            setMessages(messages => [msg, ...messages]);
        }
        document.getElementById('message-input').value = '';
    }

    let selectedUser=contacts.filter((contact)=>{
        return contact.classes.includes("selected-preview");
    })[0];

    const enterKey = function (e) {
        if (e.key === "Enter")
            newMessage();
    }

    return (
        <>
            <div id="main">
                <Profile user={user} contacts={contacts} setContacts={setContacts}/>
                <div id="chat-list">
                    {chatList}
                </div>
                <div id="chat">
                    <ChatTitle pfp={selectedUser.pfp} name={selectedUser.name} />
                    <div id="chat-body">
                        {messageList}
                    </div>
                    <div id="chat-footer">
                        <input ref={userInput} type="text" id="message-input" placeholder="Type your message..."/>
                        <button onClick={newMessage} onKeyUp={enterKey} id="send-btn" type="submit"
                                className="button-8">
                            <img id="send-icon" src={sendIcon} height="28" width="40" alt="send"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Chat