import React, { useState  } from "react";
import "./input.css";


  

  // function handleBlur ({ name, onChange, currentValue, startValue }) {
    
  //   if (currentValue !== startValue) {
  //     onChange(name, currentValue);
  //   }
  // };

  export default function Input ({type, name, placeholder, size, children, min}) {
    console.log('start input')
    const [startValue, setStartValue] = useState();    
    const [ currentValue, setCurrentValue ] = useState();

    const changeValue = (e, type) => { 
        
      let value = e.target.value;
      console.log(value);
      /* console.log(`type ${type}`); */
  
      if (type === "number" && value !== "") {
        value = Number(value);
      }

      console.log(e.type);
  
      switch (e.type) {
        case "focus":
          setStartValue(value);
          

          break;
  
        case "change":
          console.log(`currentValue before ${currentValue}`)
          console.log(`value ${value}`)
          setCurrentValue(value);         

          console.log(`currentValue after ${currentValue}`)
          break;
  
        default:
          return;
      }
    };

    const handleBlur = (name, currentValue, startValue) => {
    
      if (currentValue !== startValue) {
        changeValue(name, currentValue);
      }
    };

    console.log('end input')

    return (
      <label>
        {children}
        <input
          type={type}
          name={name}
          id={name}
          value={currentValue}
          min={min}
          placeholder={placeholder}
          onChange={changeValue}
          onFocus={changeValue}
          onBlur={handleBlur}
          autoComplete="off"
          className={`input input_${size}`}
        />
      </label>
    );
    
  }

