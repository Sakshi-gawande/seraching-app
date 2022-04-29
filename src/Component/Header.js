import React from "react";
import './Header.css';

class Header extends React.Component{
    //constructor for using state or updating it
    //everythime cons will call 1st
    constructor(){
        super()
        this.state={
           title:'First React App',
           myText:'input text here'
        }
    }
 
    handleChange=(event)=>{
        console.log(event.target.value)
       this.setState({myText:event.target.value?event.target.value:'input text here'})
       this.props.userText(event.target.value)

    }
    render(){
        return(
        <header>
            <h3>My React Search App</h3>
            <input onChange={this.handleChange}/>
            <p>{this.state.myText}</p>
        </header>
        )
    }


}
export default Header;