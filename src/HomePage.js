import React from 'react';
import styled from 'styled-components';
import BG from './sample-bg.jpg';
import Button from './Button';

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

const HomeStyle = styled.div`
  .welcome {
    height: 100vh;
    min-height: 700px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url(${BG}); // this is temporary
    background-size: cover;
    color: white;
  }
  .welcome__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .welcome__name {
      display: flex;
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      letter-spacing: 0.5rem;
      left: 100px;
      flex-direction: column;
      gap: 2rem;
      color: gray; //change this
    }
  }
  .welcome__img {
    max-width: 600px;
    width: 100%;
    height: 450px;
    margin: 0 auto;
    margin-right: 10px;
   // border: 2px solid var(--gray-1); //ditto
  }
  .welcome__info {
    margin-top: -10rem;
    margin-right: -10px;
  }
  .moving_text {
    margin-top: -27rem;
    margin-right: 300px;
  }
  .welcome__social,
  .welcome__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .welcome__social {
    left: 50px;
  }
  .welcome__scrollDown {
    right: 50px;
  }
  .welcome__social__indicator,
  .welcome__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .welcome__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .welcome__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .welcome {
      min-height: 750px;
    }
    .welcome__heading {
      font-size: 2.4rem;
      margin-bottom: -3rem;
      .welcome__name {
        font-size: 4.5rem;
      }
    }
    .welcome__img {
      height: 300px;
    }
    .welcome__info {
      z-index: 100;
      margin-top: 1rem;
      margin-left: 3rem;
      color: white;
    }
    .moving_text {
      margin-top: 1rem;
      margin-left: 2rem;
      width: 300px;
    }
    .welcome__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .welcome__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .welcome__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .welcome__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

    return (
        <HomeStyle>
        <div className="welcome">
            <h2> ADVENTOUR. </h2>
              <br />
            <h2> {greetingMessage} </h2>
                <br />
                <div className="welcome__info">
                <Button btnText="START" btnLink="/start"/> </div>
            
        </div>
        </HomeStyle>
    )
}

export default HomePage

