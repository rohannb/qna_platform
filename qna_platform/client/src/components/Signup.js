import React, { Component } from 'react';

class Signup extends Component {

    
    render() {
        return (
            <div>
                <h1>&nbsp;&nbsp;Signup page</h1> <br></br>
                <form action="http://localhost:4000/signup" method="post">
                    Name:       <input type="text" id="name" name="name"></input><br></br>
                    Email id:   <input type="text" id="email" name="email"></input><br></br>
                    Phone:      <input type="text" id="phone" name="phone"></input><br></br>
                    Location:   <input type="text" id="location" name="location"></input><br></br>
                    Age:        <input type="text" id="age" name="age" ></input><br></br>
                    Password:   <input type="password" id="pw" name="pw" ></input><br></br>
                    <button type="submit" value="Submit">Signup!</button>
                </form>
            </div>
        )
    }
}

export default Signup;