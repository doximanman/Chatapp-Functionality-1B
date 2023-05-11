function ChatPreview({contact,changeSelection}) {
    const className="chat-preview "+contact.classes;

    const lastMessage=contact.messages[0];

    if (contact.classes.includes('selected-preview')) {
        return (
            <div className={className}>
                <img className="profile-pic" src={contact.pfp} alt="Profile"/>
                <div className="profile-name">{contact.name}</div>
                <div className="preview-date">{lastMessage.date}</div>
                <p className="last-message">{lastMessage.message}</p>
            </div>
        );
    } else return (
        <div onClick={() => changeSelection(contact)} className={className}>
            <img className="profile-pic" src={contact.pfp} alt="Profile"/>
            <div className="profile-name">{contact.name}</div>
            <div className="preview-date">{lastMessage.date}</div>
            <p className="last-message">{lastMessage.message}</p>
        </div>
    );
}

export default ChatPreview;