"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { propertyData } from "../data/data";

export default function FeaturedProperties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation every time it comes into view

  return (
    <div ref={ref}>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center pb-2">
            <h4 className="title mb-3 text-extrabold">Featured Properties</h4>
            <p className="text-muted para-desc mx-auto">
              Discover your next home without the hassle of middlemen. Buy,
              sell, or rent with ease.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-0">
        {propertyData.slice(0, 6).map((item, index) => (
          <motion.div
            className="col-lg-4 col-md-6 col-12"
            key={index}
            initial={{ opacity: 0, rotateY: 90 }} // Start hidden and rotated by 90 degrees
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}} // Flip to 0 degrees when in view
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1.5,
              delay: index * 0.2, // Adds a delay for a staggered effect
            }}
          >
            <div
              className="card property border-0 shadow position-relative overflow-hidden rounded-3"
              style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="property-image position-relative overflow-hidden shadow">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="card-body content p-4">
                <Link
                  href={`/property-detail/${item.id}`}
                  className="title fs-5 text-dark fw-medium"
                >
                  {item.title}
                </Link>

                <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center justify-content-between">
                  <li className="d-flex align-items-center me-3">
                    <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-primary"></i>
                    <span className="text-muted">8000sqf</span>
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="mdi mdi-bed fs-5 me-2 text-primary"></i>
                    <span className="text-muted">4 Beds</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="mdi mdi-shower fs-5 me-2 text-primary"></i>
                    <span className="text-muted">4 Baths</span>
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                  <li className="list-inline-item mb-0">
                    <span className="text-muted">Price</span>
                    <p className="fw-medium mb-0">$5000</p>
                  </li>
                  <li className="list-inline-item mb-0 text-muted">
                    <span className="text-muted">Rating</span>
                    <ul className="fw-medium text-warning list-unstyled mb-0">
                      <li className="list-inline-item mb-0">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item mb-0">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item mb-0">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item mb-0">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item mb-0">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item mb-0 text-dark">
                        5.0(30)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="col-12 mt-4 pt-2">
          <div className="text-center">
            <Link href="/grid" className="mt-3 fs-6 text-primary">
              View More Properties{" "}
              <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
