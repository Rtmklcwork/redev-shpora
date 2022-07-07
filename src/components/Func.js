import React from "react";
import s from './Func.css'



const Func = (props) => {
return(
<div>
    <h2>
        Функциональный компонент
    </h2>
<h2>
        {`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}`}
</h2>   
    
    </div>
)
}

export default Func;