// import React, { useState } from "react";
// import { Button, Collapse, Card, CardBody } from "reactstrap";

// const Tab = () => {
//   const [openTab, setOpenTab] = useState(null);

//   const toggleTab = (tabIndex) => {
//     if (openTab === tabIndex) {
//       setOpenTab(null);
//     } else {
//       setOpenTab(tabIndex);
//     }
//   };

//   const tabData = [
//     {
//       title: "Popular Courses",
//       headline: "Web Design & Development Masterclass",
//     },
//     {
//       title: "Top Certificates",
//       content:
//         "Explore leadership, project management, finance, and operations.",
//     },
//     {
//       title: "New Courses",
//       content: "Build soft skills, confidence, time management, and more.",
//     },
//     {
//       title: "Top Diplomas",
//       content: "Build soft skills, confidence, time management, and more.",
//     },
//   ];

//   return (
//     <div className="container my-5">
//       <h3 className="text-center mb-4">📚 Browse Course Categories</h3>

//       <div className="row">
//         {tabData.map((tab, index) => (
//           <div key={index} className="col-md-3 mb-3 border-bottom">
//             <Button
//               style={{ border: "none" }}
//               color={openTab === index ? "danger" : "primary"}
//               onClick={() => toggleTab(index)}
//               block
//             >
//               {tab.title} {openTab === index ? "▲" : "▼"}
//             </Button>
//             <Collapse isOpen={openTab === index}>
//               <Card className="shadow mt-2">
//                 <CardBody></CardBody>
//               </Card>
//             </Collapse>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tab;
import React, { useState } from "react";
import { Button, Collapse, Card, CardBody } from "reactstrap";

const Tab = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabIndex) => {
    if (openTab === tabIndex) {
      setOpenTab(null);
    } else {
      setOpenTab(tabIndex);
    }
  };

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
      <div className="row">
        {tabData.map((tab, index) => (
          <>
            <div key={index} className="col-md-3 mb-3">
              <Button
                style={{ border: "none" }}
                color={openTab === index ? "danger" : "primary"}
                onClick={() => toggleTab(index)}
                block
              >
                {tab.title} {openTab === index ? "▲" : "▼"}
              </Button>
            </div>
            <Collapse isOpen={openTab === index}>
              <div className="row">
                <div className="col-md-3">
                  <Card className="shadow mt-2">
                    <CardBody>
                      {tab.courses.map((course, i) => (
                        <div key={i} className="mb-4">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="img-fluid rounded mb-2"
                          />
                          <h5>{course.title}</h5>
                          <p className="text-muted">
                            ⏰ {course.hours} &nbsp; | &nbsp; 👨‍🎓{" "}
                            {course.students}+ students
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
                          <hr />
                        </div>
                      ))}
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Collapse>
          </>
        ))}
      </div>
    </div>
  );
};

export default Tab;
