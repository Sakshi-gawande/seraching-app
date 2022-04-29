import React from 'react';
import Reactdom from 'react-dom'; 

const Footer=(props)=>{
    return(
        <div>
        <h3 className='logo'>@devloper funnel {props.month} {props.year}</h3>
        </div>
    )
}
export default Footer;