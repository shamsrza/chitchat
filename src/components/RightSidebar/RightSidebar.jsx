import React from 'react';
import assets from '../../assets/assets';
import './RightSidebar.css';
import { logout } from '../../config/firebase';

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Richard Sanford <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey there, I am Richard Sanford using chit chat</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
        <button onClick={()=>logout()}>Logout</button>
      </div>
    </div>
  );
}

export default RightSidebar
