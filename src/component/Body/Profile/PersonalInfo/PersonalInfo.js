import React, { useState } from "react";
import "./personalInfo.css";
const PersonalInfo = () => {
  return (
    <>
      <div className="personalInfo">
        <div className="personInfo">
          <div className="personInfotitleDiv">
            <p>Personal Information</p>
            <span>Edit</span>
          </div>
          <div className="personInfoformDiv">
            <div className="personInfoInputDiv">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder= "Name"/>
          </div>
          <div className="personInfoBtnDiv">
            <button>SAVE</button>
          </div>
          </div>
          
        </div>

        <div className="personInfo">
          <div className="personInfotitleDiv">
            <p>Email Address</p>
            <span>Edit</span>
            <span>Change password</span>
          </div>
          <div className="personInfoformDiv">
          <div className="personInfoInputDiv">
            <label htmlFor="email">Email Address</label>
              <input type="email" placeholder= "Email Address" />
          </div>
          <div className="personInfoBtnDiv">
            <button>SAVE</button>
          </div>
          </div> 
        </div>

        <div className="personInfo">
          <div className="personInfotitleDiv">
            <p>Mobile Number</p>
            <span>Edit</span>
          </div>
          <div className="personInfoformDiv">
          <div className="personInfoInputDiv">
               <label htmlFor="number">Mobile Number</label>
              <input type="number" placeholder="Mobile Number" />
          </div>
          <div className="personInfoBtnDiv">
            <button>SAVE</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
