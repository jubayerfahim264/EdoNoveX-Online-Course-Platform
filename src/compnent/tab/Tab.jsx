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
      title: "Popular Courses",
      content: "Learn programming, networking, cybersecurity, and more.",
    },
    {
      title: "Top Certificates",
      content:
        "Explore leadership, project management, finance, and operations.",
    },
    {
      title: "New Courses",
      content: "Build soft skills, confidence, time management, and more.",
    },
    {
      title: "Top Diplomas",
      content: "Build soft skills, confidence, time management, and more.",
    },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">📚 Browse Course Categories</h3>

      <div className="row">
        {tabData.map((tab, index) => (
          <div key={index} className="col-md-3 mb-3 border-bottom">
            <Button
              style={{ border: "none" }}
              color={openTab === index ? "danger" : "primary"}
              onClick={() => toggleTab(index)}
              block
            >
              {tab.title} {openTab === index ? "▲" : "▼"}
            </Button>
            <Collapse isOpen={openTab === index}>
              <Card className="shadow mt-2">
                <CardBody>{tab.content}</CardBody>
              </Card>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
