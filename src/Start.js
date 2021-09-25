import { React, useState } from 'react';
import styled from 'styled-components';


const StartAdventure = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`


export default function WelcomeSection() {
    const [user,setUser] = useState({location: "", date : ""});
    const [message, setMessage] = useState(null);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
    }

    return (
        <StartAdventure>
         <div className="sm-container">
            <form onSubmit={onSubmit}>
                <h3>Let's Plan an Adventure!</h3>
                <label htmlFor="location" className="sr-only">Where are we going? </label>
                <input type="text" 
                       name="location" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Orlando, FL"/>
                <label htmlFor="date" className="sr-only">When? </label>
                <input type="date" 
                       name="date" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="00/00/00"/>
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit"> Plan my adventure! </button>
            </form>
        </div>
        </StartAdventure>
    )
};
