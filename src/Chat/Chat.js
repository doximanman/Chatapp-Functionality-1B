import "./Chat.css"
import mainPFP from "../Pictures/user3-icon.jpg";
import sendIcon from "../Pictures/send-icon.png";
import Profile from "./Profile";
import ChatMessage from "./ChatMessage";
import userPFP from "../Pictures/user1-icon.jpg";
import user2PFP from "../Pictures/user2-icon.jpg";
import ChatPreview from "./ChatPreview";
import ChatTitle from "./ChatTitle";

function Chat() {

    const chats = [{
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
    }];

    const selectedUser = chats.filter((chat) => chat.classes.includes("selected-preview"))[0];


    const chatList = chats.map((chat, key) => {
        return <ChatPreview {...chat} key={key}/>;
    })


    // Chat Data
    const user = {
        pfp: mainPFP,
        name: "Alice Smith"
    }

    const messages = [{
        message: "Hello!",
        time: "00:00",
        type: "received"
    }, {
        message: "World!",
        time: "00:00",
        type: "sent"
    }]


    const messageList = messages.map((message, key) => {
        return <ChatMessage {...message} key={key}/>;
    })

    return (
        <>
            <div id="main">
                <Profile {...user}/>
                <div id="chat-list">
                    {chatList}
                </div>
                <div id="chat">
                    <ChatTitle {...selectedUser} />
                    <div id="chat-body">
                        {messageList}
                    </div>
                    <div id="chat-footer">
                        <input type="text" id="message-input" placeholder="Type your message..."/>
                        <button id="send-btn" type="submit" className="button-8">
                            <img id="send-icon" src={sendIcon} height="28" width="40" alt="send"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Chat