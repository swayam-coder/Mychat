import React, { useEffect, useRef } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import Navbar from "../MaterialUI-Elements/Navbar";
import { auth } from '../firebase';
import { useAuth } from '../contexts/Authcontext';
import axios from 'axios';
import { useState } from 'react';

export default function Chats() {

    const { user } = useAuth();
    const [loading, setloading] = useState(true);
    const isMount = useRef(false);

    const history = useHistory();

    const handleLogout = () => {
        auth.signOut();
        history.push("/");
    }

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", { type: 'image/jpeg' });
    }

    useEffect(() => {
        if(!isMount.current){
        isMount.current = true;

        if(!user || user===null){
            history.push("/")
        }

        axios.get('https://api.chatengine.io/users/me/', 
        {
            headers: {
                "project-id": "66fd8d55-6f6b-491b-89ae-3ec9aed7919c",
                "user-name": user?.email,
                "user-secret": user?.uid
            }
        })

        .then(() => setloading(false))

        .catch(e => {
            let formData = new FormData();
            formData.set("email", user?.email);
            formData.set("username", user?.email);
            formData.set("secret", user?.uid);

            getFile(user?.photoURL)
                .then(avatar => {
                    formData.append("avatar", avatar, avatar?.name);
                    axios.post(
                        'https://api.chatengine.io/users/', 
                        formData,
                        {
                            headers: {
                                "private-key": "9a540c36-9c57-4b53-8e1f-fa396f7bf008",
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    )
                    .then(() => setloading(false))
                    .catch(e => console.log(e.response))
                })
        })
    }
    }, [user, history])

    if(!user || loading) {
        return (
        <>
            <div> Some error ocurred, login again </div>
            <button className="btn btn-primary" onClick={handleLogout}>Go back</button>
        </>
        )
    }
    
    return (
        <>
            <Navbar handleLogout={handleLogout}/>
            <ChatEngine 
                height="calc(100vh - 66px)"
                projectID="66fd8d55-6f6b-491b-89ae-3ec9aed7919c"
                userName={user?.email}
                userSecret={user?.uid}
            />
        </>
    )
}
