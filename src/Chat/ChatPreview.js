
function ChatPreview({pfp,name,lastDate,lastMessage,classes}){

    let className="chat-preview " + classes;

    return(
        <div className={className}>
            <img className="profile-pic" src={pfp} alt="Profile"/>
            <div className="profile-name">{name}</div>
            <div className="preview-date">{lastDate}</div>
            <p className="last-message">{lastMessage}</p>
        </div>
    );
}

export default ChatPreview;