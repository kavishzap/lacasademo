import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // Importing icons

const AgentsSection = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f8f8",
  };

  const titleStyle = {
    fontSize: "30px",
    color: "#333",
    marginBottom: "40px",
    fontWeight: "bold",
  };

  const agentsContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
    gap: "20px",
    justifyContent: "center",
  };

  const agentCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    overflow: "hidden", // Ensure image doesn't overflow the card
    transition: "transform 0.3s ease-in-out",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "300px", // Set a height for the image
    objectFit: "cover", // Ensure the image covers the card without stretching
  };

  const socialIconsStyle = {
    gap: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Meet Our Agents</h2>
      <div style={agentsContainerStyle}>
        {/* Agent 1 */}
        <div
          className="agent-card"
          style={agentCardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="/images/test3.png" // Replace with your actual image path
            alt="Agent 1"
            style={imageStyle}
          />
          <ul
            className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center justify-content-md-start"
            style={socialIconsStyle}
          >
            <li className="list-inline-item">
              <Link
                href="https://www.facebook.com/LaCasaPropertiesMauritius/"
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
                href="https://www.instagram.com/lacasaproperties/?hl=en"
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
                href="https://www.youtube.com/@LaCasa-Properties"
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
                href="https://www.tiktok.com/@lacasaproperties"
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

        {/* Agent 2 */}
        <div
          className="agent-card"
          style={agentCardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="/images/test3.png" // Replace with your actual image path
            alt="Agent 2"
            style={imageStyle}
          />
          <ul
            className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center justify-content-md-start"
            style={socialIconsStyle}
          >
            <li className="list-inline-item">
              <Link
                href="https://www.facebook.com/LaCasaPropertiesMauritius/"
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
                href="https://www.instagram.com/lacasaproperties/?hl=en"
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
                href="https://www.youtube.com/@LaCasa-Properties"
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
                href="https://www.tiktok.com/@lacasaproperties"
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
  );
};

export default AgentsSection;
