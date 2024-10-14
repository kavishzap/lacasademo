"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { propertyData } from "../data/data"; // Make sure to replace this with your actual data
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedProperties() {
  const ref = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet and small screens
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref}>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center pb-2">
            <h4 className="title text-extrabold">Featured Properties</h4>
            <p className="text-muted para-desc mx-auto">
              Discover your next home without the hassle of middlemen. Buy,
              sell, or rent with ease.
            </p>
          </div>
        </div>
      </div>

      <Slider {...sliderSettings}>
        {propertyData.slice(0, 6).map((item, index) => (
          <div key={index} className="card-container">
            <div style={{ textAlign: "center" }}>
             
              <p> <i className="mdi mdi-map-marker fs-5 me-2 text-black"></i> {item.title}</p>
            </div>

            <div className="property-card">
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
                alt={item.title}
              />

              <div className="property-info">
                <ul className="list-unstyled d-flex align-items-center justify-content-between property-details">
                  <li className="d-flex align-items-center me-3">
                    <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-white"></i>
                    <span className="text-white">8000sqf</span>
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="mdi mdi-bed fs-5 me-2 text-white"></i>
                    <span className="text-white">4 Beds</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="mdi mdi-currency-usd fs-5 me-2 text-white"></i>
                    <span className="text-white">5000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="col-12 pt-2 mt-5">
        <div className="text-center">
          <Link href="/" className="mt-3 fs-6 text-primary">
            View More Properties{" "}
            <i className="mdi mdi-arrow-right align-middle"></i>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          padding: 10px;
        }
        .property-card {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s;
        }
        .property-card:hover {
          transform: scale(1.05); // Zoom effect on hover
        }
        .property-info {
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 100%; // Make sure the property info spans the full width of the card
        }
        .property-details {
          background-color: rgba(255, 255, 255, 0.1); // White with 0.1 opacity
          border-radius: 15px; // Rounded corners
          padding: 10px 15px; // Adjust padding for better fit
          backdrop-filter: blur(10px); // Apply blur effect
          width: 90%; // Ensure it fits inside the card
          margin: 0 auto; // Center the details horizontally
        }
        .property-details li {
          font-size: 0.9rem; // Adjust font size for responsiveness
        }
        @media (max-width: 768px) {
          .property-card {
            height: 200px; // Adjust height for mobile view
          }
          .property-details {
            padding: 8px 10px; // Adjust padding for smaller screens
            font-size: 0.8rem; // Reduce font size for mobile
          }
        }
      `}</style>
    </div>
  );
}
