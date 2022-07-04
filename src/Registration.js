
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function Registration() {

  const[fname,setfname] = useState("");     //hooks
  const[lname,setlname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");
  const[confpassword,setconfpassword] = useState("");
  const[isSubmitted,setIsSubmitted] = useState(false);
  const navigate=useNavigate();   //navigation {navigate to another compoonent}
  const DasBoard=(e)=>{
    navigate('/lOGIN')
  }

  const Input = (e) =>{
    const {id,value} = e.target
    if(id==="fname"){setfname(value)}
    if(id === "lname"){setlname(value)}
    if(id === "email"){setemail(value)}
    if(id === "password"){setpassword(value);}
    if(id === "confpassword"){setconfpassword(value)}
    

  }
  const onSubmit = (event) =>{
    event.preventDefault();

    

    if(password !== confpassword ){
      alert("Passwords don't match");
    }

    else{

      
      

    
        //use to hold the value
    let users = [];

    const usersGet = localStorage.getItem("users")

    if(usersGet){
      const userArr = JSON.parse(usersGet)
      users = [...userArr]
    };
    
    
     const user = {
      id:Math.random().toString(),
      firstName:fname,
      lastName: lname,
      email:email,
      password,
    
    }
    const verify = users.find(user => { return user.email === email })

    
    
    if(!verify){
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    alert("Registration successfull")
  if(user){
    setIsSubmitted(true)
  }}else{
    alert("user already register");
  }


};}




  const renderRegistration = 
  (     <div className="form">
    
        {/* <form onSubmit={onSubmit}> */}
        <div className="input-container">
          <label htmlFor="exampleInputEmail1" className="form__label" >FirstName</label>
          <input type="text"
           className="form_input"
          id="fname" 
          onChange={(e)=> Input(e)}
          value={fname}
          placeholder="Enter First Name" />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div className="input-container">
          <label for="exampleInputEmail1" className="form__label" >LastName</label>
          <input type="text" 
          className="form_input"
          
          
          aria-describedby="emailHelp"
           placeholder="Enter Last Name"
           id = "lname"
           value={lname}
           onChange={(e)=> Input(e)}/>
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>


        <div className="input-container">
          <label for="exampleInputEmail1" className="form__label">Email address</label>
          <input type="email"
           className="form_input"
           
          aria-describedby="emailHelp"
          id = "email"
          onChange={(e)=> Input(e)}
          value={email}
           placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div className="input-container">
          <label for="exampleInputPassword1" className="form__label">Password</label>
          <input type="password"
           className="form_input" 
           value={password}
           id = 'password'
           onChange={(e)=>Input(e)}
            placeholder="Password"/>
        </div>
        <div className="input-container">
          <label for="exampleInputPassword1"className="form__label">Confirm Password</label>
          <input type="password" 
          cclassName="form__label" 
           value={confpassword}
           id = "confpassword"
           onChange={(e)=>Input(e)}
          placeholder="Confirm Password"/>
        </div><br/>
        
          
        <button type="submit" class="btn btn-success" onClick={onSubmit
        }>Submit</button>
      {/* </form> */}
      </div>
      );



    return(
      <div className="app">
      <div className="login-form">
        <div className="title">Registration</div>
        {isSubmitted ? (
          <div> Registration is sucessfully<br></br>
          <button type="button" class= "btn btn-success"  onClick={(e)=>DasBoard(e)} placeholder="login">login</button>

          </div>
        
          ): (
            renderRegistration
            )} 
      </div>
      </div>
        
    );
}

export default Registration;