import React from "react";
import Comp1 from "./Class";
import Func from "./Func";

const Components = (props) =>{
    return(
        <div>
            <div>
                <h1>Компоненты</h1>
            </div>
            <div>
        <span>
            Компоненты позволяют разделить UI на независимые, повторно используемые части и работать с каждой из них отдельноКо
</span>
            </div>
            <div>
                <h1     >Компоненты-функции и компоненты-классы</h1>
            </div>
            <div>
               <div>
               <Func/>
               <Comp1/>
               </div>
            
                    
 
            
                
            </div>
        </div>
    )
}

export default Components;