import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#ffff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2022"
          iconStyle={{ background: "darkblue", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Physics,mathematics and informatics biased lyceum
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            School
          </h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2026"
          iconStyle={{ background: "darkblue", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Azerbaijan State Economics University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 march - 2023 may"
          iconStyle={{ background: "darkblue", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coders Azerbaijan
          </h3>
          
          <p>Web Developer/ Project Winner</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
