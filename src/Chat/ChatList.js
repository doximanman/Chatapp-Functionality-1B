import ChatPreview from "./ChatPreview";

let selected = false;

function ChatList({chats, user, setSelectedUser}) {

    function changeSelection(contact) {
        let allow = false;
        if (window.innerWidth <= 632) {
            document.getElementById('chat').classList.add('fullscreen');
            document.getElementById('chat-list').classList.add('hidden');
            allow = true;
            selected = true;
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

    window.addEventListener('resize', function () {
        if (selected) {
            if (window.innerWidth < 632) {
                document.getElementById('chat').classList.add('fullscreen');
                document.getElementById('chat-list').classList.add('hidden');
            } else {
                document.getElementById('chat').classList.remove('fullscreen');
                document.getElementById('chat-list').classList.remove('hidden');
            }
        }
    })

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