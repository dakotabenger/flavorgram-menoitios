import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import "./ImageGen.css";

export default function () {
  return (
    <div>
      <form className="newPostForm">
        <div className="postFormContainer">
          {uploadImage()}
          <div>
            <input style={{ display: "none" }} type="file" name="file" />
          </div>
          <div className="imgCaptionContainer">
            <textarea
              className="imgCaptionInput"
              name="description"
              placeholder="Add a caption..."
            />
          </div>
          <div id="errorContainer"></div>
        </div>
      </form>
    </div>
  );
}
