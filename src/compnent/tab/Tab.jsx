import React, { useState } from "react";
import { Button, Collapse, Card, CardBody } from "reactstrap";

const Tab = () => {
  const [openTab, setOpenTab] = useState(0); // Default open first tab

  const tabData = [
    {
      title: "🔥 Popular Courses",
      courses: [
        {
          title: "Web Design Masterclass",
          image: "https://via.placeholder.com/300x150",
          hours: "12h",
          students: "1.2k",
          price: "$29",
        },
        {
          title: "React for Beginners",
          image: "https://via.placeholder.com/300x150",
          hours: "10h",
          students: "950",
          price: "$19",
        },
        {
          title: "Fullstack with Node.js",
          image: "https://via.placeholder.com/300x150",
          hours: "20h",
          students: "800",
          price: "$39",
        },
        {
          title: "UI/UX Design Basics",
          image: "https://via.placeholder.com/300x150",
          hours: "8h",
          students: "670",
          price: "Free",
        },
      ],
    },
    {
      title: "🏆 Top Certificates",
      courses: [
        {
          title: "Leadership & Management",
          image: "https://via.placeholder.com/300x150",
          hours: "15h",
          students: "2k",
          price: "$49",
        },
        {
          title: "Project Management Pro",
          image: "https://via.placeholder.com/300x150",
          hours: "18h",
          students: "1.5k",
          price: "$39",
        },
        {
          title: "Finance Essentials",
          image: "https://via.placeholder.com/300x150",
          hours: "9h",
          students: "600",
          price: "$25",
        },
        {
          title: "Operations Strategy",
          image: "https://via.placeholder.com/300x150",
          hours: "12h",
          students: "700",
          price: "$35",
        },
      ],
    },
    {
      title: "🆕 New Courses",
      courses: [
        {
          title: "Time Management Hacks",
          image: "https://via.placeholder.com/300x150",
          hours: "5h",
          students: "300",
          price: "Free",
        },
        {
          title: "Productivity Mastery",
          image: "https://via.placeholder.com/300x150",
          hours: "6h",
          students: "450",
          price: "$15",
        },
        {
          title: "Creative Thinking",
          image: "https://via.placeholder.com/300x150",
          hours: "4h",
          students: "520",
          price: "$12",
        },
        {
          title: "Confidence Booster",
          image: "https://via.placeholder.com/300x150",
          hours: "3h",
          students: "380",
          price: "Free",
        },
      ],
    },
    {
      title: "🎓 Top Diplomas",
      courses: [
        {
          title: "Advanced Business Diploma",
          image: "https://via.placeholder.com/300x150",
          hours: "20h",
          students: "1k",
          price: "$59",
        },
        {
          title: "Software Engineering Diploma",
          image: "https://via.placeholder.com/300x150",
          hours: "30h",
          students: "1.8k",
          price: "$79",
        },
        {
          title: "Digital Marketing Diploma",
          image: "https://via.placeholder.com/300x150",
          hours: "25h",
          students: "1.3k",
          price: "$65",
        },
        {
          title: "Teaching English Online",
          image: "https://via.placeholder.com/300x150",
          hours: "10h",
          students: "740",
          price: "$20",
        },
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">🎯 Explore Course Tabs</h3>

      {/* Tab Buttons */}
      <div className="row justify-content-center mb-4">
        {tabData.map((tab, index) => (
          <div key={index} className="col-md-3 col-sm-6 text-center mb-2">
            <Button
              color={openTab === index ? "primary" : "success"}
              onClick={() => setOpenTab(index)}
              block
            >
              {tab.title}
            </Button>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <Collapse isOpen={true}>
        <div className="row">
          {tabData[openTab].courses.map((course, i) => (
            <div key={i} className="col-md-3 col-sm-6 mb-4">
              <Card className="shadow h-100">
                <CardBody>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="img-fluid rounded mb-2"
                  />
                  <h5>{course.title}</h5>
                  <p className="text-muted mb-1">
                    ⏰ {course.hours} &nbsp; | &nbsp; 👨‍🎓 {course.students}+
                    students
                  </p>
                  <p>
                    <strong>💲 {course.price}</strong>
                  </p>
                  <div className="d-flex gap-2">
                    <Button size="sm" color="secondary">
                      More Details
                    </Button>
                    <Button size="sm" color="success">
                      Start Learning
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Collapse>
      <button className="btn btn-outline-success mx-auto mb-3 d-block">
        Explore Free Courses
      </button>
    </div>
  );
};

export default Tab;
