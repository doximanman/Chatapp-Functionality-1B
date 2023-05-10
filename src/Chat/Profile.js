import add from "../Pictures/add.png";
import userPFP from "../Pictures/user1-icon.jpg"
import {useRef} from "react";

function Profile({user,contacts,setContacts}) {

    const contactInput = useRef(null);

    function newContact(){
        if(/\S/.test(contactInput.current.value)) {
            let contact = {
                pfp: userPFP,
                name: contactInput.current.value,
                lastDate: "25/4/2023, 11:01:54 PM",
                lastMessage: "WORLD",
                classes: ""
            }
            setContacts(contacts => [...contacts,contact]);
            document.getElementById('addChat').style.setProperty('display','none');
            document.body.removeChild(document.body.lastChild);
        }
    }

    function removeAttribute(){
        document.getElementById('nameInput').value='';
        document.getElementById('addChat').setAttribute('aria-hidden','false');
    }


    return (
        <div id="profile">
            <img className="profile-pic" src={user.pfp} alt="Profile"/>
            <div className="profile-name">{user.name}</div>
            <img id="add-chat" onClick={removeAttribute} data-bs-toggle="modal" data-bs-target="#addChat" src={add}
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
                            <input ref={contactInput} id="nameInput" type="text" className="col-12" placeholder="Contact Name"/>
                        </div>
                        <div className="modal-footer">
                            <button onClick={newContact} type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;