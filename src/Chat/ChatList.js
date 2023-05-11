import ChatPreview from "./ChatPreview";

function ChatList({chats,setMessages}){

    function changeSelection(contact){
        if(!contact.classes.includes('selected-preview')) {
            const newContacts=chats;
            const selectedUser = newContacts.filter((contact) => {
                return contact.classes.includes("selected-preview");
            })[0];
            selectedUser.classes=selectedUser.classes.replace("selected-preview", "");
            contact.classes+=" selected-preview";
            setMessages(()=>contact.messages);
            return newContacts;
        }
    }

    const chatList=chats.map((contact, key) => {
        return <ChatPreview contact={contact} changeSelection={changeSelection} key={key}/>
    });

    return(
        <div id="chat-list">
            {chatList}
        </div>
    );
}

export default ChatList;