import React, { Component } from 'react'

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
            <div className='popup_inner'>
                <form action="http://localhost:4000/addques" method="post">
                    <br></br>
                    <h3>Add a question</h3>
                    {/* Question title:  <input type="text" id="qtitle" name="qtitle"></input><br></br> */}
                    Question text:   <input type="text" id="qtext" name="qtext"></input>
                    <button type="submit" value="Submit" onClick={this.props.closePopup}>Post!</button>
                </form>
            {/* <h1>Close me</h1> */}
          {/* <button onClick={this.props.closePopup}>close me</button> */}
          </div>
        </div>
      );
    }
  }
  
  class Addquestion extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='app'>
          <h3>Ask a question</h3>
          <button onClick={this.togglePopup.bind(this)}>click here</button>
          {this.state.showPopup ? 
            <Popup
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };

export default Addquestion