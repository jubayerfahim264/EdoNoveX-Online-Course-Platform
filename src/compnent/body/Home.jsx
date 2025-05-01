import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import upSkill from "../../assets/crp-upskill.svg";
import newSkill from "../../assets/crp-new.svg";
import Tab from "../tab/Tab";
import Footer from "./Footer/Footer";
const first = [
  { icon: "💻", label: "IT & Software", courseCount: 1200 },
  { icon: "📊", label: "Management", courseCount: 200 },
  { icon: "🌱", label: "Personal Growth", courseCount: 1000 },
  { icon: "💼", label: "Business", courseCount: 100 },
];
const second = [
  { icon: "🇬🇧", label: "English Skills", courseCount: 1500 },
  { icon: "📣", label: "Sales & Marketing", courseCount: 150 },
  { icon: "👩‍🏫", label: "Teaching", courseCount: 1000 },
  { icon: "📊", label: "Management", courseCount: 700 },
];
const Home = () => {
  return (
    <>
      <div className="home p-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-5">
            🎓 Explore 5,500+ Free Online Courses
          </h2>
          <div className="row g-4 justify-content-center">
            {first.map((item, index) => (
              <div className=" col-md-3" key={index}>
                <div className="category-card text-center">
                  <h4 className="course-icon">{item.icon}</h4>
                  <h2 className="course-name">{item.label}</h2>
                  <p>
                    {item.courseCount}
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-4 mt-2 justify-content-center">
            {second.map((item, index) => (
              <div className=" col-md-3" key={index}>
                <div className="category-card text-center">
                  <h4 className="course-icon">{item.icon}</h4>
                  <h2 className="course-name">{item.label}</h2>
                  <p>
                    {item.courseCount}
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid bg-body-tertiary">
        <div className="container p-4">
          <h2 className="text-center pt-3 mt-4 second-headline">
            Confused About Your Future? Start with a Simple Step!
          </h2>
          <p className="text-center second-para">
            Just Answer a Few Questions & Get a Personalized Career Plan
            Instantly!
          </p>
          <div className="row my-5">
            <div className="col-md-6">
              <div className="career-path">
                <img src={upSkill} alt="" />
                <h2>
                  🚀Take Your Career to the <strong>Next Level</strong>
                </h2>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="career-path">
                <img src={newSkill} alt="" />
                <h2>
                  🌟Ready for a <strong>Career Change?</strong> Let’s Find Your
                  Fit!
                </h2>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ */}
      <Tab />
      {/* ================ */}
      <Footer />
    </>
  );
};

export default Home;
