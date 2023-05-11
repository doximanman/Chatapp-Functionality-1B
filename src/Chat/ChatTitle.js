import logo from "../Pictures/logo.png";

function ChatTitle({user}){
    return(
        <div id="chat-title">
            <img className="profile-pic" src={user.pfp} alt="Profile"/>
            <div className="profile-name">{user.name}</div>
            <img id="side-logo" src={logo} alt="Chatapp"></img>
        </div>
    );

}


export default ChatTitle;