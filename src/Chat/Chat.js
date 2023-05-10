import "./Chat.css"
import mainPFP from "../Pictures/user3-icon.jpg";
import add from "../Pictures/add.png";
import userPFP from "../Pictures/user1-icon.jpg";
import user2PFP from "../Pictures/user2-icon.jpg";
import logo from "../Pictures/logo.png";
import sendIcon from "../Pictures/send-icon.png";

function Chat() {
    return (
        <>
            <div id="main">
                <div id="profile">
                    <img className="profile-pic" src={mainPFP} alt="Profile"/>
                    <div className="profile-name">User Name</div>
                    <img id="add-chat" data-bs-toggle="modal" data-bs-target="#addChat" src={add}
                         alt="New Chat"/>
                    <div className="modal" id="addChat" aria-labelledby="addChatTitle">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title" id="addChatTitle">Add a New Chat</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="col-12" placeholder="Contact Name"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="chat-list">
                    <div className="chat-preview selected-preview">
                        <img className="profile-pic" src={userPFP} alt="Profile"/>
                        <div className="profile-name">Bill Tin</div>
                        <div className="preview-date">25/4/2023, 11:01:54 PM</div>
                        <p className="last-message">WORLLDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD!</p>
                    </div>
                    <div className="chat-preview">
                        <img className="profile-pic" src={user2PFP} alt="Profile"/>
                        <div className="profile-name">Jack Black</div>
                        <div className="preview-date">25/4/2023, 11:01:54 PM</div>
                        <p className="last-message">Foo!</p>
                    </div>
                </div>
                <div id="chat">
                    <div id="chat-title">
                        <img className="profile-pic" src={userPFP} alt="Profile"/>
                        <div className="profile-name">Bill Tin</div>
                        <img id="side-logo" src={logo} alt="Chatapp"></img>
                    </div>
                    <div id="chat-body">
                        <div className="message message-received bubble">Hello!
                            <div className="message-time">00:00</div>
                        </div>
                        <div className="message message-sent bubble">World!
                            <div className="message-time">00:00</div>
                        </div>
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