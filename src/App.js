import {BrowserRouter,Routes,Route} from "react-router-dom";
import Chat from "./Chat/Chat"
import Login from "./Login/Login";
import Register from "./Register/Register"
import React, { useEffect } from 'react';

function App(){
    
    useEffect(() => {
        window.onbeforeunload = function() {
            localStorage.clear();
         }

        const storedUsers = localStorage.getItem('users');
        if (!storedUsers) {
          localStorage.setItem('users', JSON.stringify([]));
        }
      }, []);
    

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Chat" element={<Chat />}></Route>
                <Route path="/Register" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;