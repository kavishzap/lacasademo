"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ navClass, logolight, menuClass }) {
  let [scroll, setScroll] = useState(false);
  let [isMenu, setisMenu] = useState(false);
  let [modal, setModal] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    const closeDropdown = () => {
      setModal(false);
    };
    document.addEventListener("mousedown", closeDropdown);
    window.scrollTo(0, 0)
  }, []);
  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };
  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }
  return (
    <>
      <header
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} ${navClass}`}
        style={{
          backgroundColor: "transparent", // Transparent for mobile
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="container">
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
            <ul className={menuClass}>
              <li className="has-submenu parent-menu-item">
                <Link href="#" style={{ color: "#a9871c" }}>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="sub-menu-item"
                  style={{ color: "#a9871c" }}
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="sub-menu-item"
                  style={{ color: "#a9871c" }}
                >
                  Why La Casa
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="sub-menu-item"
                  style={{ color: "#a9871c" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
