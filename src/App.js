import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./Chat/Chat"
import Login from "./Login/Login";
import Register from "./Register/Register"
import React from 'react'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Chat" element={<Chat/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;