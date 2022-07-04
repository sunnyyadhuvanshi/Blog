import React from "react";
import './App.css';

export function Sidebar({path}) {

 

  return (
    <div class="wrapper">
      <div class="sidebar">
        <div class="profile">
          <img src="/sunny.jpg" alt="profile_picture" />
          <h3>Sunny Yadav</h3>
          <p>Web Developer</p>
        </div>
        <ul>
          <li>
            <a href="/dashboard/blogform" className={'dashboard' === path && 'active'} >
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="/post" className={"post"=== path && "active"}>
              <span className="icon">
                <i className="fas fa-desktop"></i>
              </span>
              <span class="item">Home</span>
            </a>
          </li>
          <li>
            <a href="/" className="">
              <span class="icon">
                <i class="fas fa-user-friends"></i>
              </span>
              <span class="item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}