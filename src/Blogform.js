import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

function Blogform(){
    const[title,setTitle] = useState("");  //hooks
    const[blog,setblog] = useState("");
    const [isSubmitted, setisSubmitted] = useState(false)


    const Insert=(event)=>{
        
        const{id,value} = event.target;
        if(id === "titletxt"){ setTitle(value)}
        else if(id === "blogtxt"){ setblog(value)}

        
      


    }

    
    const Submit=()=>{
       
        let bolg = []
        const userGet = localStorage.getItem("bolg")
        if(userGet){
            const userArr = JSON.parse(userGet)
            bolg=[...userArr]
        }

        const blogPost = {   //object {keyed collection}
            id:bolg.length+1,

            title:title,
            blog:blog,
        };
        bolg.push(blogPost)

        localStorage.setItem('bolg',JSON.stringify(bolg))
        alert("post")




    };






    return(
        <div className="container-fluid">
            <div
            className="row m-4">
                <div className="col">
                <Sidebar path = "dashboard"/> 
             </div>
            <div className="col-md-9">

        
        
        <div className="form">
            <div className="input-container">
                <label>title</label>
                <input type="text" className="input-container"  
                 onChange={Insert}
                 value ={title}  
                 id = "titletxt"
                placeholder="title of bolg"/>
            </div>
  
            <div className="input-container">
                <label>Blog</label>
                <textarea type ="text"
                className="input-container" 
                placeholder="type your text here " 
                onChange={Insert}
                value={blog}
                id = "blogtxt"
                required name= "Password"  row="8"/>
          </div><br/>
          <div className="input-container">
              <input type = "submit"   onClick={ Submit}className="btn btn-success"/>
          </div>
          </div>
  
         
          </div>
      </div>
      </div>
    )
}
export default Blogform;