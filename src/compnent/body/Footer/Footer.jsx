import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../../assets/logo.png";
import Form from "./Subscribe";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container border-bottom border-opacity-10 border-dark-subtle">
        <div className="row my-5">
          {/* Column 1: Free Online Course */}
          <div className="col-md-4">
            <div className="col-footer">
              <h2>FREE ONLINE COURSES</h2>
              <ul>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} /> Web
                  Design & Development
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Digital Marketing
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Communication Skills
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Freelancing & Outsourcing
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Microsoft Office
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Email Marketing
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Spoken English
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Canva Design
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quality Free Learning */}
          <div className="col-md-4">
            <div className="col-footer">
              <h2>QUALITY FREE LEARNING</h2>
              <ul>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Certificates & Diplomas
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} /> All
                  Course Categories
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Instructor-led Programs
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Beginner to Advanced Tracks
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Student Success Stories
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Enroll as a Mentor
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Discover More */}
          <div className="col-md-4">
            <div className="col-footer">
              <h2>DISCOVER MORE</h2>
              <ul>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Access Free LMS
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Career Roadmap Plan
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Build Your Resume
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} /> Free
                  Personality Test
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  EdoNoveX Certificate Verifier
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Become a Course Creator
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} /> Join
                  as Affiliate
                </li>
                <li>
                  <FontAwesomeIcon className="me-2" icon={faAnglesRight} />{" "}
                  Invite & Earn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== */}
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="left-bottom">
              <img src={logo} alt="logo" className="img-fluid" width={200} />
              <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-footer-bottom">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
