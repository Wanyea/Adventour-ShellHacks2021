import React from 'react'

function HomePage() {
    const time = new Date().getHours();
    let greetingMessage = 'Hello Wanyea'

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


    return (
        <div className="home">
            <h2> This is the center of the page. {greetingMessage} </h2>
        </div>
    )
}

// function checkTime() {
//     const time = new Date().getDate();
//     return (
//         console.log(time)
//     )
// }

export default HomePage

