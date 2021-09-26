import React from 'react';
import './Form.css';

function Form(props) {
    const nameEl = React.useRef(null);
    const stateEl = React.useRef(null);
    const dateEl = React.useRef(null);
    const rememberMeEl = React.useRef(null);
  
    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        city: nameEl.current.value,
        stateLoc: stateEl.current.value,
        password: dateEl.current.value,
        rememberMe: rememberMeEl.current.checked,
      }
      console.log(formData);
    };
  
    return (
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Which city are we going?" ref={nameEl} />
         <input type="text" placeholder="Which state is it in?" ref={stateEl} />
         <input type="date" placeholder="When?" ref={dateEl} />
         <label>
           <input type="checkbox" ref={rememberMeEl} />
           Remember this trip
         </label>
         <button type="submit" className="myButton">Plan My Adventure!</button>
       </form>
     );
  }

  export default Form;
  