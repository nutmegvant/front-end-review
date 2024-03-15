import { useContext, useState } from 'react';
import {UserContext}  from '../context/UserContext';
import { getUsers } from '../api';

const UserLogin = () => {
    const [username, setUsername] = useState('')
    const { loggedUser, setLoggedUser } = useContext(UserContext);
    const [notFound, setNotFound] = useState(false)
    const [userLoginError, setUserLoginError] = useState(false)
    const [userLogoutError, setUserLogoutError] = useState(false)

    function loginUser() {
        getUsers()
        .then((users) => {
            const userIndex = users.findIndex(u => u.username === username);
            if (userIndex > -1) {
                setLoggedUser(users[userIndex])
            }
            else {
                setNotFound(true)
                setUsername('')
            }
        })
        .catch(() => {
            setUserLoginError(true)
        })
    }

    function logoutUser() {
        setLoggedUser(null)
        setUsername('')
        .catch(() => {
            setUserLogoutError(true)
        })
    }

    function handleUsername (event) {
        setUsername(event.target.value)
    }

    if(loggedUser === null){
        return (<div>
            {userLoginError && (<div className="error-msg">
                    An error occured when logging in
                </div>)}
                    <div className="login-form">
                        <p className="p-hint">Psst! Use these to log in: jessjelly, tickle122, or cooljmessy</p>
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
                        {notFound && <div className="user-not">User not found 😿</div>}
                            <img className="login-img" src="https://media1.giphy.com/media/cgzHlhotPqBPesNYyU/giphy_s.gif?cid=6c09b952fdc2w1x3v9tbsq1xav4ijox220ll3hhd5hebfvru&ep=v1_internal_gif_by_id&rid=giphy_s.gif&ct=s"/>
                    </div>
                </div>
        )
    }
    else {
        return (
                <div>
                    {userLogoutError && (<div className="error-msg">
                    An error occured when logging out
                </div>)}
                    <div className="logout"> {loggedUser.username} logged in!
                        <button className="logout-button" onClick={logoutUser}>
                            Log out
                        </button>
                        <div>
                            <img className="pusheen-box" src="https://media2.giphy.com/media/04b8NVK7cTY61NIiz7/giphy.gif?cid=6c09b952rj2oe9la3dtb6rcp5x278sgfgqm454iqhcivv7y6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"/>
                        </div>
                    </div>
                </div>
        );
    }
};

export default UserLogin;