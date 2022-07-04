import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  // const[txt,settxt] = useState({
  //   eemail:"",
  //   ppassword:"",
  // });

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [isSubmitted, setisSubmitted] = useState(false)

  const navigate = useNavigate();

  const DashBoard =(e)=>{
    navigate('/dashboard')
  }
  // function input(event){
  //   const value =event.target.value;                                                      //Sunny code 
  //   const name = event.target.name;

  //   settxt((preValue)=> {


    const Input = (e) => {
      const {id , value} = e.target;
      if(id==="email"){setEmail(value);}
      if(id==="password"){setPassword(value);}
    
}

const handelSubmit = (event) => {
  event.preventDefault();

  let users=[];
  const userGet = localStorage.getItem("users")
  
  if(userGet){
    const usersArr =JSON.parse(userGet)
    users=[...usersArr]
  };

  const user = users.find(user => {
    return user.email === email && user.password === password
})

if (user) {
  localStorage.setItem('loggedInUser', JSON.stringify(user))
  setisSubmitted(true)
} else {
  alert('Incorrect email or password!')
}

};



  const renderForm= (
    <div className="form">
      <form onSubmit={handelSubmit}>
          <div className="input-container">
          <label>Email address</label>
          <input type="email" className="input-container"  required value={email} id="email" 
          placeholder="Enter email" 
          onChange= {Input}
          name = "EEmail" />


          <label>Password</label>
          <input type="password" className="input-container"  required value={password} id="password" placeholder="Password" onChange={Input} name= "Password" />
        </div><br/>

        <div className="button-container">
            <input type="submit"  className="btn btn-success" />
          </div>
      </form>
    </div>

);


 
    return(

      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          { isSubmitted ?(
            <div>loggin successfull<br>
            </br>
            <input type="Submit" className="btn btn-success" placeholder="dashboard" onClick={(e)=>DashBoard(e)}/>
            </div>
          )
        : renderForm}
        </div>
      </div>     
    
      
    );
};

export default Login;