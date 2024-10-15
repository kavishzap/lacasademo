/* eslint-disable @next/next/no-img-element */
"use client";
import Head from "next/head";
import React, { useState } from "react";

const SellerForm = () => {
  const [image, setImage] = useState(null);
  const [maxPrice, setMaxPrice] = useState("");

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
    <div
      style={{
        backgroundImage: `url(/images/propertiesImage/2.jpg)`,
      }}
    >
      <div className="container">
        <h5 className="header">Ene Pas Pas Envers La Maison De To Reve</h5>
        <br />
        <div className="">
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

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address *</label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="Please enter your email address"
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

              {/* Max Price */}
              <div className="form-group">
                <label htmlFor="maxPrice">Max Price ($)</label>
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Enter maximum price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn">
                List Property
              </button>
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
          background-color: rgba(
            255,
            255,
            255,
            0.3
          ); // Background with opacity 0.1
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

        .form-left,
        .form-right {
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
          .form-left,
          .form-right {
            width: 100%;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SellerForm;
