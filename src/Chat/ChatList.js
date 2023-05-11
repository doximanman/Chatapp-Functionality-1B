import ChatPreview from "./ChatPreview";

function ChatList({chats, user, setSelectedUser}) {

    function changeSelection(contact) {
        let allow = false;
        if (window.innerWidth < 632) {
            document.getElementById('chat').classList.add('fullscreen');
            document.getElementById('chat-list').classList.add('hidden');
            allow = true;
        }
        if (allow || !contact.classes.includes('selected-preview')) {
            const selectedUser = chats.filter((contact) => {
                return contact.classes.includes("selected-preview");
            })[0];
            selectedUser.classes = selectedUser.classes.replace("selected-preview", "");
            contact.classes += " selected-preview";
            setSelectedUser({...contact});
        }
    }

    /*function changeSelection(contact) {
        if (window.innerWidth < 632) {
            document.getElementById('chat').classList.add('fullscreen');
            document.getElementById('chat-list').classList.add('hidden');
            const selectedUser = chats.filter((contact) => {
                return contact.classes.includes("selected-preview");
            })[0];
            selectedUser.classes.replace("selected-preview","");
        }
        if (!contact.classes.includes('selected-preview')) {
            const selectedUsers = chats.filter((contact) => {
                return contact.classes.includes("selected-preview");
            });
            if(selectedUsers.length>0){
                selectedUsers[0].classes = selectedUsers[0].classes.replace("selected-preview", "");
            }
            contact.classes += " selected-preview";
            setSelectedUser({...contact});
        }
    }*/

    const chatList = chats.map((contact, key) => {
        return <ChatPreview contact={contact} changeSelection={changeSelection} messages={user.messages} key={key}/>
    });

    return (
        <div id="chat-list">
            {chatList}
        </div>
    );
}

export default ChatList;