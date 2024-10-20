"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { FiX } from "react-icons/fi"; // Cross icon

export default function Navbar({ navClass, menuClass }) {
  let [scroll, setScroll] = useState(false);
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function activateMenu() {
    // Code for activating the menu
  }

  return (
    <>
      <header
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} ${navClass}`}
        style={{
          backgroundColor: "transparent",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-8 col-lg-4">
              <h5
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#a9871c"
                }}
                className="m-0"
              >
                La Casa Properties
              </h5>
            </div>

            {/* Hamburger Menu Icon for mobile */}
            <div className="col-4 d-lg-none text-right d-flex justify-content-end">
              <button
                className="btn btn-link"
                style={{
                  fontSize: "1.5rem",
                  color: "#a9871c",
                  marginRight: "10px", // Adjusted to move further right
                }}
                onClick={toggleMenu}
              >
                <FiMenu />
              </button>
            </div>

            {/* Navbar links for desktop */}
            <div className="col-lg-8 d-none d-lg-flex justify-content-end">
              <ul className={`d-flex ${menuClass}`}>
                <li className="mx-3">
                  <Link href="#" style={{ color: "#bfbfbf" }} onMouseEnter={e => e.target.style.color = "#a9871c"} onMouseLeave={e => e.target.style.color = "#bfbfbf"}>
                    Home
                  </Link>
                </li>
                <li className="mx-3">
                  <Link href="#" style={{ color: "#bfbfbf" }} onMouseEnter={e => e.target.style.color = "#a9871c"} onMouseLeave={e => e.target.style.color = "#bfbfbf"}>
                    Properties
                  </Link>
                </li>
                <li className="mx-3">
                  <Link href="#" style={{ color: "#bfbfbf" }} onMouseEnter={e => e.target.style.color = "#a9871c"} onMouseLeave={e => e.target.style.color = "#bfbfbf"}>
                    Why La Casa
                  </Link>
                </li>
                <li className="mx-3">
                  <Link href="#" style={{ color: "#bfbfbf" }} onMouseEnter={e => e.target.style.color = "#a9871c"} onMouseLeave={e => e.target.style.color = "#bfbfbf"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fullscreen Menu for mobile */}
        {isMenuOpen && (
          <div
            className="fullscreen-menu position-fixed top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark transparent background
              backdropFilter: "blur(5px)", // Blur effect
              zIndex: 9999,
            }}
          >
            {/* Cross Button */}
            <button
              className="btn btn-link position-absolute top-0 right-0 m-4 d-flex align-self-end"
              style={{ fontSize: "1.5rem", color: "#a9871c" }}
              onClick={toggleMenu}
            >
              <FiX />
            </button>

            {/* Centered Title */}
            <h3
              style={{
                fontFamily: "Georgia, serif",
                color: "#a9871c"
              }}
              className="mb-5 text-center text-white"
            >
              LaCasa Properties
            </h3>

            {/* Links in a vertical list */}
            <ul className="list-unstyled text-center">
              <li className="mb-3">
                <Link
                  href="#"
                  className="btn btn-link"
                  style={{ color: "#a9871c" }}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="btn btn-link"
                  style={{ color: "#a9871c" }}
                  onClick={toggleMenu}
                >
                  Properties
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="btn btn-link"
                  style={{ color: "#a9871c" }}
                  onClick={toggleMenu}
                >
                  Why La Casa
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="btn btn-link"
                  style={{ color: "#a9871c" }}
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
