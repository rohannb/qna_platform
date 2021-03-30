import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                <h1>&nbsp;&nbsp;Login page</h1> <br></br>
                <form action="http://localhost:4000/login" method="post">
                    Email id:   <input type="text" id="email" name="email"></input><br></br>
                    Password:   <input type="password" id="pw" name="pw"></input><br></br>
                    <button type="submit" value="Submit">Login!</button>
                </form>
            </div>
        )
    }
}

export default Login;