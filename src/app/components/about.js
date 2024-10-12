"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { FiHexagon, FiHome, FiBriefcase, FiKey } from "../assets/icons/vander";

export default function AboutUs() {
  let aboutData = [
    {
      icon: FiHome,
      title: "Evaluate Property",
      desc: "If the distribution of letters and words  is random, the reader will not be distracted from making.",
    },
    {
      icon: FiBriefcase,
      title: "Meeting with Agent",
      desc: "If the distribution of letters and words  is random, the reader will not be distracted from making.",
    },
    {
      icon: FiKey,
      title: "Close the Deal",
      desc: "If the distribution of letters and words  is random, the reader will not be distracted from making.",
    },
  ];

  return (
    <>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">Why La Casa Properties</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A great platform to buy, sell, and rent your properties with
              utmost guarantee.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-0">
        {/* Column for About Data */}
        <div className="col-md-6">
          {aboutData.map((item, index) => {
            let Icon = item.icon;
            return (
              <div
                className="position-relative features text-center mx-lg-4 px-md-1 mb-4"
                key={index}
              >
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center mb-3">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <Icon className="fea icon-m-md text-primary" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="#" className="fw-medium title text-dark fs-5">
                    {item.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Column for Animated Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {/* Framer Motion for animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image
              src="/images/house.png"
              width={1000}
              height={1000}
              alt="About Us Image"
              className="img-fluid rounded"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
