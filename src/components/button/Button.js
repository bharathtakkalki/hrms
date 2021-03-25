import React from 'react';


const Button = ({type='button',secondary=false, classname="",children,onClick=()=>{}}) =>{
    return(
        <button type={type} className={`button ${secondary ? '--secondary' : '--primary'} ${classname} `} onClick={onClick}>{children}</button>
    )
}

export default Button;