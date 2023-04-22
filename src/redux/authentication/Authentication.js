

import React, { useState } from 'react';

const Authentication = () => {
    const [body, setBody] = useState({
        username: "1",
        password: "22",
    });
    const onChangeBody = e => {
        let data = body;
        data[e.target.name] = e.target.value;
        setBody({ ...data });
    }
    const login = e => {
        console.log("login")
        console.log(body)
    }
    const logout = e => {
        console.log("logout")
        console.log(body)
    }
    return (
        <div>
            <h5>Authentication</h5>
            <hr />
            <span>Username : </span>
            <input type="text" name="username" value={body?.username} onChange={(e) => onChangeBody(e)} />
            <br />
            <span>Password : </span>
            <input type="password" name="password" value={body?.password} onChange={(e) => onChangeBody(e)} />
            <br />
            <button type='submit' onClick={login}>Login</button>
            <button type='submit' onClick={logout}>Logout</button>
        </div>
    );
};

export default Authentication;