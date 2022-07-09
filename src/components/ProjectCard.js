import React from 'react';
import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h6>{title}</h6>
          <span><small>{description}</small></span>
        </div>
      </div>
    </Col>
  )
}
