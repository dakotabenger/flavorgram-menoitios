import React, { useState, useRef } from "react";
import { fetch } from "../../store/csrf";

import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";

import "./ImageGen.css";

export default function ImageGen() {
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const uploadInput = useRef(null);
  const user = useSelector((state) => {
    return state.session.user;
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photoUrl) {
      setError(<p id="errorMsg">Please Upload Recipe Image</p>);
      return;
    }
    const formData = new FormData();

    formData.append("userId", user.id);
    formData.append("file", photoUrl);
    // formData.append("description", description);
    try {
      let res = await fetch(`/api/recipes/`, {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("hit me", res);
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
    return validity.valid && setPhotoUrl(file);
  };

  const handleUploadImage = (e) => {
    e.preventDefault();

    uploadInput.current.click();
  };

  const uploadImage = () => {
    if (!imagePreview) {
      return (
        <>
          <h1 className="imgUploadTitle">Upload an Image</h1>
          <div className="imgPlaceholder"></div>
          <div onClick={handleUploadImage}>
            <button className="imgUploadButton">Upload</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="img-container">
            <img className="img-post" src={imagePreview} alt="Upload Preview" />
          </div>
          <div onClick={handleUploadImage}>
            <button className="imgUploadButton" style={{ width: "120px" }}>
              Change Image
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="post-form__container">
          {uploadImage()}
          <div>
            <input
              ref={uploadInput}
              style={{ display: "none" }}
              type="file"
              name="file"
              onChange={updateFile}
            />
          </div>
          {/* <div className="imgCaptionContainer">
            <textarea
              className="imgCaptionInput"
              value={description}
              name="description"
              placeholder="Add a description..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div> */}
          <div id="errorContainer">{error}</div>
          {/* <div>
            <input className="img-post__button" type="submit" value="Post" />
          </div> */}
        </div>
      </form>
    </div>
  );
}
