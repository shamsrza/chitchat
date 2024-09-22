import React from 'react'
import assets from '../../assets/assets'
import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <div className="logo">
            <img src={assets.logo_icon} alt=""/>
            <h3>ChitChat</h3>
          </div>
          
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
             <div className="sub-menu">
                <p>Edit Profile</p>
                <hr />
                <p>Logout</p>
             </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='Search here...'/>
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item,index)=>(
          <div key={index} className="friends">
          <div className="linear-gradient-border">
            <img src={assets.profile_img} alt="" />
          </div>
          
          <div className="description">
            <p>Richard Sanford</p>
            <span>Hello, how are you?</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar

