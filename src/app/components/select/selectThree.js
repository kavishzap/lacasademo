"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Select = dynamic(() => import("react-select"), { ssr: false });

import { FiDollarSign, FiHome, FiSearch } from "../../assets/icons/vander";

export default function SelectThree() {
  let [activeIndex, setActiveIndex] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  let category = [
    { value: "1", label: "Houses" },
    { value: "2", label: "Apartment" },
    { value: "3", label: "Villas" },
  ];
  let price = [
    { value: "1", label: "500" },
    { value: "1", label: "1000" },
    { value: "2", label: "2000" },
    { value: "3", label: "3000" },
    { value: "4", label: "4000" },
    { value: "5", label: "5000" },
    { value: "6", label: "6000" },
    { value: "7", label: "7000" },
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

            <div className="card border-0 active" style={{ backgroundColor: 'unset', important: true }}>
              <form className="card-body text-start">
                <div className="registration-form text-dark text-start">
                  <div className="row g-lg-0">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12 text-white">
                        <div className="mb-3">
                          <label className="form-label fs-6">Search :</label>
                          <div className="filter-search-form position-relative filter-border">
                            <FiSearch className="fea icon-ex-md icons" />
                            <input
                              name="name"
                              type="text"
                              id="job-keyword"
                              className="form-control filter-input-box border-0"
                              placeholder="Search your keywords"
                              style={{ backgroundColor: "unset !important" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-12 text-white">
                        <div className="mb-3">
                          <label className="form-label fs-6">
                            Select Categories:
                          </label>
                          <div className="filter-search-form position-relative filter-border">
                            <FiHome className="fea icon-ex-md icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              options={category}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-12 text-white">
                        <div className="mb-3">
                          <label className="form-label fs-6">
                            Price Range: Rs {priceRange[0]} - Rs{" "}
                            {priceRange[1]}
                          </label>
                          <div className="filter-search-form position-relative filter-border p-3">
                            <Slider
                              range
                              min={0}
                              max={5000000}
                              step={100}
                              defaultValue={priceRange}
                              value={priceRange}
                              onChange={handleSliderChange}
                              trackStyle={[{ backgroundColor: "#a9871c" }]} // Customize the color of the selected range
                              handleStyle={[
                                { borderColor: "#a9871c" }, // Customize the handle color
                                { borderColor: "#a9871c" },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-3 col-md-6 col-12 text-white d-flex justify-content-center align-items-center"
                    >
                      <input
                        type="submit"
                        id="search"
                        name="search"
                        style={{ height: "48px" }}
                        className="btn btn-primary searchbtn w-100"
                        value="Search"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* {activeIndex === 1 ? (
              <div className="card border-0 active" style={{ backgroundColor: 'unset', important: true }}>
                <form className="card-body text-start">
                  <div className="registration-form text-dark text-start">
                    <div className="row g-lg-0">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 text-white">
                          <div className="mb-3">
                            <label className="form-label fs-6">Search :</label>
                            <div className="filter-search-form position-relative filter-border">
                              <FiSearch className="fea icon-ex-md icons" />
                              <input
                                name="name"
                                type="text"
                                id="job-keyword"
                                className="form-control filter-input-box bg-light border-0"
                                placeholder="Search your keywords"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 text-white">
                          <div className="mb-3">
                            <label className="form-label fs-6">
                              Select Categories:
                            </label>
                            <div className="filter-search-form position-relative filter-border bg-light">
                              <FiHome className="fea icon-ex-md icons" />
                              <Select
                                className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                                options={category}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="mb-3">
                            <label className="form-label fs-6">
                              Price Range: Rs {priceRange[0]} - Rs{" "}
                              {priceRange[1]}
                            </label>
                            <div className="filter-search-form position-relative filter-border bg-light p-3">
                              <Slider
                                range
                                min={0}
                                max={5000000}
                                step={100}
                                defaultValue={priceRange}
                                value={priceRange}
                                onChange={handleSliderChange}
                                trackStyle={[{ backgroundColor: "#a9871c" }]} // Customize the color of the selected range
                                handleStyle={[
                                  { borderColor: "#a9871c" }, // Customize the handle color
                                  { borderColor: "#a9871c" },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-12 text-white">
                        <input
                          type="submit"
                          id="search"
                          name="search"
                          style={{ height: "48px" }}
                          className="btn btn-primary searchbtn w-100"
                          value="Search"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
            {activeIndex === 2 ? (
              <div className="card border-0 active" style={{ backgroundColor: 'unset', important: true }}>
                <form className="card-body text-start">
                  <div className="registration-form text-dark text-start">
                    <div className="row g-lg-0">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 text-white">
                          <div className="mb-3">
                            <label className="form-label fs-6">Search :</label>
                            <div className="filter-search-form position-relative filter-border">
                              <FiSearch className="fea icon-ex-md icons" />
                              <input
                                name="name"
                                type="text"
                                id="job-keyword"
                                className="form-control filter-input-box bg-light border-0"
                                placeholder="Search your keywords"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 text-white">
                          <div className="mb-3">
                            <label className="form-label fs-6">
                              Select Categories:
                            </label>
                            <div className="filter-search-form position-relative filter-border bg-light">
                              <FiHome className="fea icon-ex-md icons" />
                              <Select
                                className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                                options={category}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="mb-3">
                            <label className="form-label fs-6">
                              Price Range: Rs {priceRange[0]} - Rs{" "}
                              {priceRange[1]}
                            </label>
                            <div className="filter-search-form position-relative filter-border bg-light p-3">
                              <Slider
                                range
                                min={0}
                                max={5000000}
                                step={100}
                                defaultValue={priceRange}
                                value={priceRange}
                                onChange={handleSliderChange}
                                trackStyle={[{ backgroundColor: "#a9871c" }]} // Customize the color of the selected range
                                handleStyle={[
                                  { borderColor: "#a9871c" }, // Customize the handle color
                                  { borderColor: "#a9871c" },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-12 text-white">
                        <input
                          type="submit"
                          id="search"
                          name="search"
                          style={{ height: "48px" }}
                          className="btn btn-primary searchbtn w-100"
                          value="Search"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
