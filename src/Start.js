import { React } from 'react';
import styled from 'styled-components';
import SimpleMap from './SimpleMap';
import Form from './Form';
import GetLocation from './GetLocation';


const StartAdventureStyle = styled.div`
  padding: 10rem 0;
  .section__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .section__wrapper::after {
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
    .section__wrapper {
      flex-direction: column;
    }
    .section__wrapper::after {
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


export default function StartAdventure() {

    const location = GetLocation();

    return (
        <StartAdventureStyle>
         <div className="sm-container">
            <Form />
        </div>
        </StartAdventureStyle>

    )
}

