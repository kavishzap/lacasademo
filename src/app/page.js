"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import FeaturedProperties from "./components/featuredProperties";
import ClientOne from "./components/clientOne";
import Broker from "./components/broker";
import AboutUs from "./components/about";
import GetInTuch from "./components/getInTuch";
import Footer from "./components/footer";
import GetInTouch2 from "./GetInTouch2/page";
import SelectThree from "./components/select/selectThree";
import TextAnimation from "./components/textAnimation";
import ScrollTop from "./components/scrollTop";
import Loader from "./components/loader"; // Import your loader
import VideoSection from "./videoSection/page";
import Link from "next/link";
import { FaTiktok, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const images = [
    "/images/propertiesImage/2.jpg",
    "/images/propertiesImage/4.jpg",
    "/images/propertiesImage/6.jpg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);
  // Simulate content loading time
  useEffect(() => {
    // Simulate a loading delay (you can use actual loading logic here, e.g., API call)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // You can adjust the delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
      />
      <section className="position-relative">
        <div>
          <div
            className="bg-home-one d-table w-100 shadow overflow-hidden"
            id="home"
            style={{
              minHeight: "100vh", // Full screen height
              position: "relative",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
            }}
          >
            <div
              className="bg-overlay image-wrap"
              id="hero-images"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(60%)",
                transition: "filter 0.5s ease-in-out", // Smooth transition effect
                height: "20%", // Default height for larger screens
              }}
            ></div>

            <div className="bg-overlay bg-black opacity-50"></div>

            <div className="container" style={{ marginTop: "-90px" }}>
              <div className="row justify-content-center">
                <div className="col-12">
                  <ul
                    className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center justify-content-md-start"
                    style={{ gap: "20px" }}
                  >
                    <li className="list-inline-item">
                      <Link
                        href="/https://www.facebook.com/LaCasaPropertiesMauritius/"
                        target="_blank"
                        className="rounded-3"
                        style={{ border: "none" }}
                      >
                        <FaFacebook
                          className="fea align-middle"
                          style={{ fontSize: "32px" }}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        href="/https://www.instagram.com/lacasaproperties/?hl=en"
                        target="_blank"
                        className="rounded-3"
                        style={{ border: "none" }}
                      >
                        <FaInstagram
                          className="fea align-middle"
                          style={{ fontSize: "32px" }}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        href="/https://www.youtube.com/@LaCasa-Properties"
                        target="_blank"
                        className="rounded-3"
                        style={{ border: "none" }}
                      >
                        <FaYoutube
                          className="fea align-middle"
                          style={{ fontSize: "32px" }}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        href="/https://www.tiktok.com/@lacasaproperties"
                        className="rounded-3"
                        style={{ border: "none" }}
                      >
                        <FaTiktok
                          className="fea align-middle"
                          style={{ fontSize: "32px" }}
                        />
                      </Link>
                    </li>
                  </ul>

                  <div className="title-heading" style={{ marginTop: "20px" }}>
                    <TextAnimation />
                    <p className="para-desc text-white title-dark mb-0">
                      TO LAKAZ SO VALER{" "}
                      <span style={{ fontWeight: "bold", color: "#a9871c" }}>
                        INESTIMAB.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "-120px" }} className="container">
            <SelectThree />
          </div>
        </div>
      </section>

      <VideoSection />
      <br />
      <FeaturedProperties />

      <br />
      <AboutUs />

      <h4 className="heading fw-bold text-black title-dark mb-3 text-center mt-5">Meet Our Agent</h4>
      
      <div className="mt-4">
        <div className="row g-0">
          {" "}
          {/* Added g-0 to remove gutter spacing */}
          {/* Column 1 */}
          <div className="col-md-6">
            <section className="position-relative">
              <div>
                <div
                  className="bg-home-one d-table w-100 shadow overflow-hidden"
                  id="home"
                  style={{
                    minHeight: "50vh", // Decreased height to 50% of screen height
                    position: "relative",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
                  }}
                >
                  <div
                    className="bg-overlay image-wrap"
                    id="hero-images"
                    style={{
                      backgroundImage: `url(/images/213.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(60%)",
                      transition: "filter 0.5s ease-in-out", // Smooth transition effect
                      height: "100%", // Full height for the overlay relative to the container
                    }}
                  ></div>

                  <div className="bg-overlay bg-black opacity-50"></div>

                  <div className="container" style={{ marginTop: "-50px" }}>
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div
                          className="title-heading"
                          style={{ marginTop: "20px" }}
                        >
                          <h4 className="heading fw-bold text-white title-dark mb-3">
                            Bilal
                          </h4>
                        </div>
                        <ul
                          className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center justify-content-md-start"
                          style={{ gap: "20px" }}
                        >
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.facebook.com/LaCasaPropertiesMauritius/"
                              target="_blank"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaFacebook
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.instagram.com/lacasaproperties/?hl=en"
                              target="_blank"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaInstagram
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.youtube.com/@LaCasa-Properties"
                              target="_blank"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaYoutube
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.tiktok.com/@lacasaproperties"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaTiktok
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Column 2 */}
          <div className="col-md-6">
            <section className="position-relative">
              <div>
                <div
                  className="bg-home-one d-table w-100 shadow overflow-hidden"
                  id="home"
                  style={{
                    minHeight: "50vh", // Decreased height to 50% of screen height
                    position: "relative",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
                  }}
                >
                  <div
                    className="bg-overlay image-wrap"
                    id="hero-images"
                    style={{
                      backgroundImage: `url(/images/shane1.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(60%)",
                      transition: "filter 0.5s ease-in-out", // Smooth transition effect
                      height: "100%", // Full height for the overlay relative to the container
                    }}
                  ></div>

                  <div className="bg-overlay bg-black opacity-50"></div>

                  <div className="container" style={{ marginTop: "-50px" }}>
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div
                          className="title-heading"
                          style={{ marginTop: "20px" }}
                        >
                          <h4 className="heading fw-bold text-white title-dark mb-3">
                            Shane
                          </h4>
                        </div>
                        <ul
                          className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center justify-content-md-start"
                          style={{ gap: "20px" }}
                        >
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.facebook.com/LaCasaPropertiesMauritius/"
                              target="_blank"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaFacebook
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.instagram.com/lacasaproperties/?hl=en"
                              target="_blank"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaInstagram
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.youtube.com/@LaCasa-Properties"
                              target="_blank"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaYoutube
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              href="/https://www.tiktok.com/@lacasaproperties"
                              className="rounded-3"
                              style={{ border: "none" }}
                            >
                              <FaTiktok
                                className="fea align-middle"
                                style={{ fontSize: "32px" }}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ClientOne />

      <GetInTouch2 />
      <Footer />
      <ScrollTop />
    </>
  );
}
