"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { clientData } from "../data/data";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

export default function ClientOne() {
  let settings = {
    container: ".tiny-three-item",
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  };

  return (
    <div className="mb-3 p-3">
      <div className="row justify-content-center mt-5">
        <div className="col text-center">
          <h4 className="title">What Our Clients Say?</h4>
          <p className="para-desc mb-0 mx-auto" style={{ color: "#a9871c" }}>
            A great platform to buy, sell, and rent your properties with utmost
            guarantee.
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <div className="tiny-three-item">
            <TinySlider settings={settings}>
              {clientData.map((item, index) => {
                return (
                  <div className="tiny-slider client-testi" key={index}>
                    <div
                      className="card border-0"
                      style={{
                        // Replace with your image
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        className="card-body p-4 rounded-3 shadow m-2"
                        style={{
                          backdropFilter: "blur(10px)", // Blurs the background
                        //   backgroundImage: 'url("/images/bg12.png")',
                          backgroundColor: "rgba(255, 255, 255, 0.7)", // Adds a semi-transparent overlay
                        }}
                      >
                        <i className="mdi mdi-format-quote-open display-1 text-white opacity-25 position-absolute end-0 top-0"></i>

                        <div className="d-flex">
                          <Image
                            src={item.image}
                            width={45}
                            height={45}
                            className="avatar avatar-md-sm rounded-circle shadow-md"
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-0" style={{ color: "white" }}>
                              {item.name}
                            </h6>
                            <small className="text-muted">{item.title}</small>
                          </div>
                        </div>

                        <p className="text-muted fst-italic mb-0 mt-4">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
      </div>
    </div>
  );
}
