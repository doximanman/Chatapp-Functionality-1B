import userPFP from "../Pictures/user1-icon.jpg";
import logo from "../Pictures/logo.png";

function ChatTitle({pfp,name}){
    return(
        <div id="chat-title">
            <img className="profile-pic" src={pfp} alt="Profile"/>
            <div className="profile-name">{name}</div>
            <img id="side-logo" src={logo} alt="Chatapp"></img>
        </div>
    );

}


export default ChatTitle;