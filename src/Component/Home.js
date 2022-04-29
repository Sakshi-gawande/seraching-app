import React from "react";
import Footer from './Footer';
import Header from './Header';
import JSON from './db.json';
import NewsDisplay  from "./NewsDisplay";

class Home extends  React.Component{
    constructor(){
        super();
        this.state={
            news:JSON,
            filtered:JSON
        }
    }
//taking data from header component to home 
//  R
     filteredNews=(userInput)=>{
        const output=this.state.news.filter((data)=>{ //filtering data on basis of index 
           return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

     render(){
        return(
            //getting value tp usertet from --->Header-->this.props.userText(event.target.value)
            <div>
                <Header userText={(data)=>{this.filteredNews(data)}}/> 
                <NewsDisplay data={this.state.filtered}/>
                <Footer year="2022" month="May"/>
            </div>
        )
    }   
}
export default Home;