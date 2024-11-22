import React from "react";
import { useNavigate } from "react-router-dom";
import '../button(contactme)/ButtonContact.css'
function ButtonContact() {
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="button">
        <button onClick={goToContactPage}>Contact Me</button>
      </div>
    </div>
  );
}

export default ButtonContact;
