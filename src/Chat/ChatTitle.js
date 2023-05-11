import logo from "../Pictures/logo.png";

function ChatTitle({user}){

    function goBack(){
        document.getElementById('chat').classList.remove('fullscreen');
        document.getElementById('chat-list').classList.remove('hidden');
    }



    return(
        <div id="chat-title">
            <img className="profile-pic" src={user.pfp} alt="Profile"/>
            <div id="chat-name" className="profile-name">{user.name}</div>
            <img id="side-logo" src={logo} alt="Chatapp"></img>
            <button id="go-back" onClick={goBack} type="button"></button>
        </div>
    );

}


export default ChatTitle;