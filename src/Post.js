import React from "react";
import { Sidebar } from "./Sidebar";
import './App.css';
import { Row } from "react-bootstrap";

export function Post() {



    return (<>
   

<div className="container-fluid" style={{heigth:"100vh"}}>
    <div className="row">
        <div className="col"><Sidebar path = "post" /></div>

        
        
        <div className="col"  style={{backgroundColor:"blue"}}>
       
            <div><h1  style={{textAlign:"center"}}>Title
            </h1>
            </div>
            
            
            </div>
        <div className="col" style={{backgroundColor:"red"}}>
            <div>
                <h1 style={{textAlign:"center"}}>title</h1>
                </div>
                </div>
        <div className="col" style={{backgroundColor:"green"}}>
            <div>
                <h1  style={{textAlign:"center"}}>title
                </h1>
                </div>
                </div>


    </div>

</div>
    



    </>

);
};

 