import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="email-wrapper">
      <div className="email">
        <h1 className="email-title">Subscribe to get newest recipes!</h1>

        <div className="email-container">
          <input type="text" placeholder="Input your email here" />
          <button className="btn-p">Subscribe now!</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
