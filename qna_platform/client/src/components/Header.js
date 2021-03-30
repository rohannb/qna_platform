import React from 'react'

function Header() {

    function Darkmode(){
        document.body.style='background: rgb(19, 27, 34)';
        document.getElementById('dmode').style.display='none';
        document.getElementById('lmode').style.display='initial';
    }

    function Lightmode(){
        document.body.style='background: white';
        document.getElementById('lmode').style.display='none';
        document.getElementById('dmode').style.display='initial';
    }

    return (
        <div>
            <div style={{display: "flex",justifyContent: "center"}}>
            <h2>QnA Forum</h2>
            </div>

            <div style={{display: "flex", justifyContent: "flex-end"}}>
            <button id="lmode" onClick={Lightmode} style={{display: "none"}}>Light mode</button>
            <button id="dmode" onClick={Darkmode} style={{visibility: "visible"}}>Dark mode</button>
            </div>
        </div>
    )
}

export default Header