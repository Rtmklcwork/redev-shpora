import React from "react";
import s from "./Class.css"

class Comp1 extends React.Component{
    render(){
        return (
            <div>
                <h2>
                    Классовый компонент
                </h2>
                <h2>
                    {`class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}`}
                </h2>
            </div>
        )
    }
    
    
}

export default Comp1;


