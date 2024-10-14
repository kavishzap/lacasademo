/* eslint-disable @next/next/no-img-element */
'use client'
import Head from 'next/head';
import React, { useState } from 'react';

const SellerForm = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length) {
      setImage(droppedFiles[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>List Your Property</title>
        <meta name="description" content="Provide your details to list your property." />
      </Head>

      <div className="container">
        <h1 className="header">List Your Property</h1>

        <div className="form-container">
          <form>
            <div className="form-left">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Please enter your full name"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Please enter your phone number"
                  required
                />
              </div>

              {/* Property Address */}
              <div className="form-group">
                <label htmlFor="propertyAddress">Property Address *</label>
                <input
                  type="text"
                  id="propertyAddress"
                  placeholder="Please enter the property address"
                  required
                />
              </div>
            </div>

            <div className="form-right">
              {/* Property Type */}
              <div className="form-group">
                <label htmlFor="propertyType">Property Type *</label>
                <select id="propertyType" required>
                  <option value="">Select Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                  <option value="Land">Land</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              {/* Property Size */}
              <div className="form-group">
                <label htmlFor="propertySize">Property Size (sq. ft) *</label>
                <input
                  type="number"
                  id="propertySize"
                  placeholder="Enter property size in sq. ft"
                  required
                />
              </div>

              {/* Custom Image Upload */}
              <div
                className="image-upload"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <p>Drag & Drop your image here or click to upload</p>
                <input
                  type="file"
                  id="propertyImage"
                  className="file-input"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
                {image && (
                  <div className="image-preview">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="preview-img"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn">List Property</button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
          padding: 40px;
        }

        .header {
          text-align: center;
          font-size: 32px;
          margin-bottom: 30px;
        }

        .form-container {
          display: flex;
          flex-direction: column;
        }

        form {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .form-left, .form-right {
          width: 48%;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        .image-upload {
          width: 100%;
          padding: 20px;
          border: 2px dashed #ccc;
          border-radius: 10px;
          text-align: center;
          position: relative;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .image-upload:hover {
          border-color: #4a5568;
        }

        .image-upload p {
          color: #718096;
          margin: 0;
        }

        .file-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .image-preview {
          margin-top: 15px;
        }

        .preview-img {
          width: 100%;
          max-height: 150px;
          object-fit: cover;
          border-radius: 5px;
        }

        .form-submit {
          width: 100%;
          text-align: center;
        }

        .btn {
          padding: 15px 30px;
          background-color: #a9871c;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 30px;
        }

        .btn:hover {
          background-color: #2d3748;
        }

        @media screen and (max-width: 768px) {
          .form-left, .form-right {
            width: 100%;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default SellerForm;
