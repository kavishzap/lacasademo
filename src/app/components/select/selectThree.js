"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "rc-slider/assets/index.css";

const Select = dynamic(() => import("react-select"), { ssr: false });

import { FiHome, FiSearch } from "../../assets/icons/vander";
import { FaRupeeSign } from "react-icons/fa6";

export default function SelectThree() {
  let [activeIndex, setActiveIndex] = useState(0);

  let category = [
    { value: "1", label: "Houses" },
    { value: "2", label: "Apartment" },
    { value: "3", label: "Villas" },
  ];

  return (
    <div className="row justify-content-center">
      <div className="col-12 mt-sm-0 pt-sm-0">
        <div className="features-absolute">
          <ul
            className="nav nav-pills shadow border-bottom p-3 flex-row d-md-inline-flex nav-justified mb-0 rounded-top-3 position-relative overflow-hidden w-100"
            id="pills-tab"
            role="tablist"
            style={{
              background: "rgba(255, 255, 255, 0.1)", // White with opacity
              backdropFilter: "blur(5px)", // Apply blur effect
              WebkitBackdropFilter: "blur(5px)", // Safari support
            }}
          >
            <li className="nav-item m-1">
              <Link
                className={`${activeIndex === 0 ? "active" : ""
                  } nav-link py-2 px-4 rounded-3 fw-medium`}
                href="#"
                scroll={false}
                onClick={() => setActiveIndex(0)}
              >
                Buy
              </Link>
            </li>

            <li className="nav-item m-1">
              <Link
                className={`${activeIndex === 1 ? "active" : ""
                  } nav-link py-2 px-4 rounded-3 fw-medium`}
                href="#"
                scroll={false}
                onClick={() => setActiveIndex(1)}
              >
                Sell
              </Link>
            </li>

            <li className="nav-item m-1">
              <Link
                className={`${activeIndex === 2 ? "active" : ""
                  } nav-link py-2 px-4 rounded-3 fw-medium`}
                href="#"
                scroll={false}
                onClick={() => setActiveIndex(2)}
              >
                Rent
              </Link>
            </li>
          </ul>

          <div
            className="tab-content shadow"
            style={{
              background: "rgba(255, 255, 255, 0.1)", // White with opacity
              backdropFilter: "blur(5px)", // Apply blur effect
              WebkitBackdropFilter: "blur(5px)", // Safari support
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <div
              className="card border-0 active"
              style={{ backgroundColor: "unset", important: true }}
            >
              <form className="card-body text-start">
                <div className="registration-form text-dark text-start">
                  <div className="row g-lg-0">
                    {/* Search Field */}
                    <div className="col-lg-3 col-md-6 col-12 text-white">
                      <label className="form-label fs-6">Search Location</label>
                      <div className="filter-search-form position-relative filter-border">
                        <FiSearch className="fea icon-ex-md icons" />
                        <input
                          type="text"
                          placeholder="Property Search"
                          className="form-input filter-input-box border-0"
                          style={{
                            backgroundColor: "unset",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>

                    {/* Select Categories */}
                    <div className="col-lg-3 col-md-6 col-12 text-white">
                      <label className="form-label fs-6">Select Categories</label>
                      <div className="filter-search-form position-relative filter-border">
                        <FiHome className="fea icon-ex-md icons" />
                        <Select
                          className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                          options={category}
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              backgroundColor: "unset",
                              border: "none",
                              color: "white",
                            }),
                            singleValue: (provided) => ({
                              ...provided,
                              color: "white",
                            }),
                            menu: (provided) => ({
                              ...provided,
                              backgroundColor: "#333",
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              backgroundColor: state.isSelected ? "#555" : "#333",
                              color: state.isSelected ? "white" : "lightgray",
                              ":hover": {
                                backgroundColor: "#444",
                                color: "white",
                              },
                            }),
                          }}
                        />
                      </div>
                    </div>

                    {/* Maximum Price */}
                    <div className="col-lg-3 col-md-6 col-12 text-white">
                      <label className="form-label fs-6">Maximum Price</label>
                      <div className="filter-search-form position-relative filter-border">
                        <FaRupeeSign className="fea icon-ex-md icons" />
                        <input
                          type="number"
                          placeholder="Max Price"
                          className="form-input filter-input-box border-0"
                          style={{
                            backgroundColor: "unset",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="col-lg-3 col-md-6 col-12 text-white d-flex align-items-end p-2">
                      <button
                        type="submit"
                        id="search"
                        name="search"
                        style={{
                          height: "48px",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        className="btn btn-primary searchbtn d-flex align-items-center justify-content-center"
                      >
                        Search
                        <FiSearch className="me-2" style={{ fontSize: "1.2rem", marginLeft: "3px" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
