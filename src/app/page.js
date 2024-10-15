'use client'

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
import AnimatedShapes from "./components/animation";
import Loader from "./components/loader"; // Import your loader
import SocialMediaIcons from './components/socialmedia/socialMediaIcons';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate content loading time
  useEffect(() => {
    // Simulate a loading delay (you can use actual loading logic here, e.g., API call)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can adjust the delay

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
                backgroundImage: "url('/images/bg/hero_background_image.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(60%)",
                transition: "filter 0.5s ease-in-out", // Smooth transition effect
                height: "100%", // Ensures the image covers full height
              }}
            ></div>

            <div className="bg-overlay bg-black opacity-50"></div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="title-heading">
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
        </div>
      </section>

      <section className="section pt-5">
        <div style={{ marginTop: '-190px' }} className="container">
          <SelectThree />
        </div>
        <div className="container mt-100 mt-40">
          <FeaturedProperties />
        </div>

        <AnimatedShapes />

        <div className="container mt-100 mt-10">
          <AboutUs />
        </div>

        <AnimatedShapes />

        <div className="container mt-100 mt-60">
          <ClientOne />
        </div>

        <div className="container mt-100 mt-60">
          <GetInTouch2 />
        </div>

        <AnimatedShapes />

        <div className="container mt-100 mt-60">
          <Broker />
        </div>

        <AnimatedShapes />
      </section>
      <SocialMediaIcons />

      <Footer />
      <ScrollTop />
    </>
  );
}
