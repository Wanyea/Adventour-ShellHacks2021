import React from 'react'

function HomePage() {
    const time = new Date().getHours();
    let greetingMessage = 'Hello Wanyea'
    setGreeting()
    

function setGreeting() {
    //Morning
    if(time < 12) {
        greetingMessage = "Good Morning Wanyea"
    
    //Afternoon
    } else if (time >= 12 && time < 18) {
        greetingMessage = "Good Afternoon Wanyea"
    
    //Evening
    } else if(time >= 18) {
        greetingMessage = "Good Evening Wanyea"
    } else {
        greetingMessage = 'Hello Wanyea'
    }
}

function displayMessage() {
    console.log("Hey, this button works!")
}

    return (
        <div className="home">
            <h2> This is the center of the page. </h2>
            <h2> {greetingMessage} </h2>
                <br />
            
            <button onClick={displayMessage}> Start! </button>
            
        </div>
    )
}

export default HomePage

