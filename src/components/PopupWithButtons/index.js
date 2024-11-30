import React from "react";

const PopupWithButtons = ({ onClose }) => (
  <div className="popup second_variant">
    <div className="popup__text">
      <div className="popup__text_title">Title of that pop up</div>
      <div className="popup__text_content">
        Some useful information about a place. You can add whatever you want:
        pictures, buttons, different headings.
      </div>
    </div>
    <div className="popup__buttons">
      <div className="popup__buttons__block">
        <button className="button" onClick={() => alert("Clicked!")}>
          Button 1
        </button>
        <button className="button" onClick={() => alert("Clicked!")}>
          Button 2
        </button>
      </div>
      <button className="button_close" onClick={() => alert("Clicked!")}>
        Primary Button
      </button>
    </div>
    <button className="close_icon" onClick={onClose} />
  </div>
);

export default PopupWithButtons;
