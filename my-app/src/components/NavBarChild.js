import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? 
            (
                <button onClick={props.handleClick}>Log In</button>
            ) : (
                <form>
                    <lable for="username">Username</lable>
                    <input id="username" name="username" type="text" placeholder='Username'></input>
                    <lable for="password">Password</lable>
                    <input id="password" type="password" name="password" placeholder='Password'></input>
                    <button onClick={props.handleClick}>Submit</button>
                </form>
            )}
    </div>
  )
}

export default NavBarChild