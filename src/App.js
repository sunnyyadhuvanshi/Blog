
import React from "react";
import About from "./About";
import {Home} from "./Home";


import Registration from "./Registration";
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import Dashboard from "./Dashboard";
import Blogform from "./Blogform";
import { Post } from "./Post";

function App() {
    return <BrowserRouter>

    <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/About" element={<About/>}/>
       <Route exact path = "/dashboard/blogform" element={<Blogform/>}/>
       <Route exact path = "/Registration" element={<Registration/>}/>
        <Route exact path = "/lOGIN" element={<Login/>}/>
        <Route exact path = "/dashboard" element={<Dashboard/>}/>
        <Route exact path = "/post" element = {<Post/>}/>

    </Routes>
    </BrowserRouter>
    
    
    
}




export default App;