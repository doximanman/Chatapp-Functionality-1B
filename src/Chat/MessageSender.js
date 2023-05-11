import sendIcon from "../Pictures/send-icon.png";
import {useRef} from "react";


function MessageSender({setMessages}){

    const userInput = useRef(null);

    const newMessage = function () {
        const date = new Date();
        const input = userInput.current.value;
        if (/\S/.test(input)) {
            let msg = {message: userInput.current.value, time: date.getHours() + ":" + date.getMinutes(), type: "sent"};
            console.log(msg);

            setMessages(messages=>[msg,...messages]);
        }
        document.getElementById('message-input').value = '';
    }

    const enterKey = function (e) {
        if (e.key === "Enter")
            newMessage();
    }


    return(
        <div id="message-send">
            <input ref={userInput} type="text" id="message-input" placeholder="Type your message..."/>
            <button onClick={newMessage} onKeyUp={enterKey} id="send-btn" type="submit"
                    className="button-8">
                <img id="send-icon" src={sendIcon} height="28" width="40" alt="send"/>
            </button>
        </div>
    );
}

export default MessageSender;