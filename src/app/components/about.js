"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBuilding, FaReceipt } from "react-icons/fa";


export default function AboutUs() {
  let aboutData = [
    {
      icon: FaReceipt,
      title: "500+ successful transactions",
      desc: "Completed in the last year, helping clients buy, sell, or rent with ease.",
      image: "/images/propertiesImage/1.jpg",
    },
    {
      icon: FaCalendarAlt,
      title: "10+ years of experience ",
      desc: "In the real estate market, providing expert guidance.",
      image: "/images/propertiesImage/2.jpg",
    },
    {
      icon: FaBuilding,
      title: "Over 1,000 properties ",
      desc: "Listed for sale and rent, offering a wide range of options.",
      image: "/images/propertiesImage/3.jpg",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="section-title text-center">
              <h4 className="title">Why La Casa Properties ?</h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                A great platform to buy, sell, and rent your properties with
                utmost guarantee.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-4 mt-4">
          {aboutData.map((item, index) => {
            let Icon = item.icon;
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                {/* Wrapping card in motion.div */}
                <motion.div
                  className="card shadow text-center p-4 border-0 h-100"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px", // Rounded corners
                  }}
                  whileHover={{
                    rotate: 360, // 360-degree flip
                    transition: { duration: 0.8 }, // Transition duration for the flip
                  }}
                >
                  <div
                    className="card-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)", 
                      backdropFilter: "blur(2px)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="card-body position-relative"
                    style={{ zIndex: 2 }}
                  >
                    <div
                      className="icon-box bg-light rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
                      style={{ height: "60px", width: "60px" }}
                    >
                      <Icon className="fea icon-m-md text-primary fs-3" />
                    </div>
                    <h5 className="card-title fw-medium text-white">
                      {item.title}
                    </h5>
                    <p className="card-text text-white">{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
