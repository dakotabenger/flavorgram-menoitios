import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import "./ImageGen.css";

export default function () {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const uploadInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError(<p id="errorMsg">Please Upload Recipe Image</p>);
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    formData.append("description", description);
    try {
      let res = await fetch(`/api/recipes/`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw res;
      return history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const updateFile = (e) => {
    e.preventDefault();
    const {
      target: {
        validity,
        files: [file],
      },
    } = e;
    e.target.files[0]
      ? setImagePreview(URL.createObjectURL(e.target.files[0]))
      : setImagePreview(null);
    return validity.valid && setImage(file);
  };

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
