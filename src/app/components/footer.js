import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiYoutube, FiFacebook, FiInstagram, FiMail, FiPhone } from "../assets/icons/vander";

export default function Footer() {
  return (
    <>
      <section className="bg-building-pic d-table w-100" style={{ backgroundImage: "url('/images/building.png')" }}></section>
      <footer className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60 footer-border">
                <div className="row justify-content-center text-center text-md-start">
                  <div className="col-lg-5 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <Link href="#" className="logo-footer">
                      <Image src="/images/logo 12.png" width={70} height={50} alt="" />
                    </Link>
                    <p className="mt-4">TO LAKAZ SO VALER INESTIMAB.</p>
                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center justify-content-md-start">
                      <li className="list-inline-item">
                        <Link href="/" target="_blank" className="rounded-3">
                          <FiFacebook className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="/" target="_blank" className="rounded-3">
                          <FiInstagram className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="/" target="_blank" className="rounded-3">
                          <FiYoutube className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="/" className="rounded-3">
                          <FiMail className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">La Casa Properties</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <Link href="#" className="text-foot">
                          <i className="mdi mdi-chevron-right align-middle me-1"></i> Properties
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-foot">
                          <i className="mdi mdi-chevron-right align-middle me-1"></i> About us
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-foot">
                          <i className="mdi mdi-chevron-right align-middle me-1"></i> Services
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-foot">
                          <i className="mdi mdi-chevron-right align-middle me-1"></i> Team
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Contact Details</h5>

                    <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                      <FiMail className="fea icon-sm text-primary mt-1 me-3" />
                      <Link href="mailto:contact@example.com" className="text-foot">
                        contact@example.com
                      </Link>
                    </div>

                    <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                      <FiPhone className="fea icon-sm text-primary mt-1 me-3" />
                      <Link href="tel:+152534-468-854" className="text-foot">
                        +230 5765-4321
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
