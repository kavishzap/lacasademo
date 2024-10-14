import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMail } from "../assets/icons/vander";
import { brokerData } from "../data/data";

import { FiFacebook, FiInstagram, FiTwitter } from "../assets/icons/vander";

export default function Broker() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title">Have Question ? Meet Our Agents</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              Our experienced and dedicated agents are here to help you navigate
              the real estate market, offering personalized support and expert
              advice every step of the way.
            </p>
          </div>
        </div>
      </div>
      {/* Centering the row */}
      <div className="row justify-content-center align-items-center g-4 mt-0">
        {brokerData.map((item, index) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-12 d-flex justify-content-center"
              key={index}
            >
              <div className="card team team-primary text-center">
                {/* Centering the image */}
                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden position-relative">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-overlay avatar avatar-ex-large rounded-pill position-absolute"></div>
                </div>

                <div className="content mt-3 mb-5">
                  <Link
                    href="/page-team-detail"
                    className="text-dark h5 mb-0 title"
                  >
                    {item.name}
                  </Link>
                  <ul className="list-unstyled team-social mb-0 position-absolute bottom-0 start-50 translate-middle-x">
                    <li className="list-inline-item">
                      <Link href="#" className="btn btn-sm btn-pills btn-icon">
                        <FiFacebook className="icons fea-social" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#" className="btn btn-sm btn-pills btn-icon">
                        <FiInstagram className="icons fea-social" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#" className="btn btn-sm btn-pills btn-icon">
                        <FiTwitter className="icons fea-social" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-4 pt-2">
        <Link href="/" className="btn btn-pills btn-primary">
          <span className="h5 mb-0 me-1">
            <FiMail className="fea icon-sm" />
          </span>
          Contact us
        </Link>
      </div>
      ;
    </>
  );
}
