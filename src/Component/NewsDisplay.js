import React from 'react';
import ReactDom from 'react-dom';


const NewsDisplay =(props)=>{
 
  //calling all data from json and display it on screen  

  const renderdata=props.data.map((data)=>{
    return(
      <div>
        <h3>{data.title}</h3>
        <p>{data.feed}</p>
      </div>
    )
  })

        return(
            <div>
             {renderdata} 
            </div>
        )
    
}
export default NewsDisplay;