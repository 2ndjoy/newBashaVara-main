import React, { useState } from "react";

const PhotoUploadBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <label
        htmlFor="photoUpload"
        style={{
          cursor: "pointer",
          border: "2px solid #ccc",
          padding: "15px",
          display: "inline-block",
        }}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "150px" }}
          />
        ) : (
          <div>
            <span>Click to select a photo</span>
          </div>
        )}
      </label>
      <input
        type="file"
        id="photoUpload"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PhotoUploadBox;
