import React from "react";
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
import Categories from "./components/categories";
import VideoSection from "./videoSection/page";
import AnimatedShapes from "./components/animation";

export default function Home() {
  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
      />
      <section className="position-relative mt-5 pt-4">
        <div className="container-fluid px-md-4 px-2 mt-2">
          <div
            className="bg-home-one d-table w-100 shadow rounded-3 overflow-hidden"
            id="home"
          >
            <div
              className="bg-overlay image-wrap "
              id="hero-images"
              style={{
                backgroundImage: "url('/images/bg/hero_background_image.png')",
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
        <div className="container">
          <SelectThree />
        </div>

        <div className="container mt-100 mt-40">
          <FeaturedProperties />
        </div>
        {/* <div className="p-4">
          <VideoSection />
        </div> */}
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
      <Footer />
      <ScrollTop />
    </>
  );
}
