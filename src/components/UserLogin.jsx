import { useContext, useState } from 'react';
import {UserContext}  from '../context/UserContext';
import { getUsers } from '../api';

const UserLogin = () => {
    const [username, setUsername] = useState('')
    const { loggedUser, setLoggedUser } = useContext(UserContext);

    function loginUser() {
        getUsers()
        .then((users) => {
            const userIndex = users.findIndex(u => u.username === username);
            if (userIndex > -1) {
                setLoggedUser(users[userIndex])
            }
            else {
                console.log('user not found')
            }
        })
    }

    function logoutUser() {
        setLoggedUser(null)
        setUsername('')
    }

    function handleUsername (event) {
        setUsername(event.target.value)
    }

    if(loggedUser === null){
        return (
            <div className="login-form">
                <div>
                    <label className="username-login">
                        Username: 
                    </label>
                <input type="text" className="login-input" value={username} placeholder='Enter username...' onChange={handleUsername}>
                </input>
                <button className="login-button" onClick={loginUser} >
                    Log in
                </button>
                </div>
                    <img className="login-img" src="https://media1.giphy.com/media/cgzHlhotPqBPesNYyU/giphy_s.gif?cid=6c09b952fdc2w1x3v9tbsq1xav4ijox220ll3hhd5hebfvru&ep=v1_internal_gif_by_id&rid=giphy_s.gif&ct=s"/>
            </div>
        )
    }
    else {
        return (
            <div>
            <button onClick={logoutUser}>
                Log out
            </button>
            </div>
        );
    }
};

export default UserLogin;