/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
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

const icons = [
  "/images/icons/icon1.png",
  "/images/icons/icon2.png",
  "/images/icons/icon3.png",
  "/images/icons/icon4.png",
  "/images/icons/icon5.png",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true); // State to show/hide the navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const images = [
    "/images/propertiesImage/2.jpg",
    "/images/propertiesImage/4.jpg",
    "/images/propertiesImage/6.jpg",
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on unmount
    };
  }, [lastScrollY]);

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
      {showNavbar && (
        <Navbar
          navClass="sticky"
          menuClass="navigation-menu nav-left"
          style={{
            transition: "transform 0.3s ease-in-out",
            transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          }}
        />
      )}

      <section className="herosection">
        <div>
          <div
            className="bg-home-one d-table w-100 shadow overflow-hidden"
            id="home"
            style={{
              minHeight: "80vh", // Full screen height
              position: "relative",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
            }}
          >
            <div
              className="bg-overlay image-wrap"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(60%)",
                transition: "filter 0.5s ease-in-out",
                height: "100vh", // Ensure it fills the section
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
              {/* SelectThree with responsive margin */}
              <div className="select-container">
                <SelectThree />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .select-container {
              margin-top: 160px;
            }
          }

          @media (min-width: 769px) {
            .select-container {
              margin-top: 260px;
            }
          }
        `}</style>
      </section>

      <VideoSection />

      <div className="container mb-5 mt-5">
        <FeaturedProperties />
      </div>

      <div className="container">
        <AboutUs />
      </div>

      <div className="row justify-content-center mt-5 p-3">
        <div className="col text-center">
          <h4 className="title">Meet Our Agents</h4>
          <p className="para-desc mb-0 mx-auto" style={{ color: "#a9871c" }}>
            Experience personalized service with our expert agents, guiding you
            every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-6 container" style={{ marginTop: "30px" }}>
        <div className="row g-4">
          {/* First Column */}
          <div className="col-md-6">
            <section className="position-relative">
              <div
                className="bg-home-one d-table w-100 shadow overflow-hidden"
                id="home"
                style={{
                  minHeight: "40vh", // Reduced height
                  position: "relative",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <div
                  className="bg-overlay image-wrap"
                  style={{
                    backgroundImage: `url(/images/213.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(60%)",
                    transition: "filter 0.5s ease-in-out",
                    height: "100%",
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
                        <h4 className="heading fw-bold text-white title-dark mb-3 ms-4">
                          Beelaal
                        </h4>
                        <h4 className="heading fw-bold text-white title-dark mb-3 ms-4">
                          Banharally
                        </h4>
                      </div>
                      <ul
                        className="list-unstyled social-icon foot-social-icon mb-0 mt-4 ms-4 d-flex justify-content-center justify-content-md-start"
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Second Column */}
          <div className="col-md-6">
            <section className="position-relative">
              <div
                className="bg-home-one d-table w-100 shadow overflow-hidden"
                id="home"
                style={{
                  minHeight: "40vh", // Reduced height
                  position: "relative",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <div
                  className="bg-overlay image-wrap"
                  style={{
                    backgroundImage: `url(/images/shane1.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(60%)",
                    transition: "filter 0.5s ease-in-out",
                    height: "100%",
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
                        <h4 className="heading fw-bold text-white title-dark mb-3 ms-4">
                          Shane
                        </h4>
                        <h4 className="heading fw-bold text-white title-dark mb-3 ms-4">
                          Dedans
                        </h4>
                      </div>
                      <ul
                        className="list-unstyled social-icon foot-social-icon mb-0 mt-4 ms-4 d-flex justify-content-center justify-content-md-start"
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px" }}>
        <ClientOne />
      </div>

      <div className="">
        <GetInTouch2 />
      </div>

      <Footer />
      <ScrollTop />
    </>
  );
}
